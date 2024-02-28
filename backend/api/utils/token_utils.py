from jwt import encode, decode
from datetime import datetime, timedelta
from os import getenv
from dotenv import load_dotenv

from ..models import User, Sessions
from ..serializers import SessionsSerializer
from .user_utils import authenticate_user
from .session_utils import session_update

load_dotenv()
JWT_KEY = getenv("JWT_KEY")


def generate_token(nickname, user_id, token_type, exp_period):
    """
    Generate JWT token with specified parameters.

    Parameters:
    - nickname (str): Name of user 0_0
    - user_id (str): Unique identifier of user
    - token_type (str): Type of token ('access' or 'refresh')
    - exp_period (int): Expiration period of token in minutes (for 'access' type) or days (for 'refresh' type)

    Returns:
    - str: JWT token
    """
    creation_time = datetime.utcnow()
    if token_type == 'access':
        expiration_time = creation_time + timedelta(minutes=exp_period)
    elif token_type == 'refresh':
        expiration_time = creation_time + timedelta(days=exp_period)
        session_error = session_update(creation_time, user_id)
        if session_error is not None:
            raise(session_error)
    else:
        raise('Invalid token type')

    payload = {
        'token_type': token_type,
        'nickname': nickname,
        'user_id': user_id,
        'created': creation_time.isoformat(),
        'expired': expiration_time.isoformat()
    }

    token = encode(payload, JWT_KEY, algorithm='HS256')
    return token


def token_check(token, token_type):
    """
    Check validity of JWT token.

    Parameters:
    - token (str): JWT token to be checked
    - token_type (str): JWT token style. refresh/access

    Returns:
    - int: 1 if token is valid
           0 if token is expired
          -1 if token is invalid
          -2 if token is annuled
    """
    decoded_payload = decode(token, JWT_KEY, algorithms=['HS256'])
    expiration_time_str = decoded_payload.get('expired', None)
    expiration_time = datetime.strptime(expiration_time_str, "%Y-%m-%dT%H:%M:%S.%f")
    real_type = decoded_payload.get('token_type', None)

    if expiration_time is not None and datetime.utcnow() > expiration_time: # Expire check
        return 0  # Token expired

    if token_type != real_type: # Type check
        return -1 # Token invalid

    nickname = decoded_payload.get('nickname', None)
    user_id = decoded_payload.get('user_id', None)
    token_created_str = decoded_payload.get('created', None)
    token_created = datetime.strptime(token_created_str, "%Y-%m-%dT%H:%M:%S.%f")
    user = authenticate_user(nickname=nickname, user_id=user_id)
    if user is not None:
        if token_type == "refresh":
            # Sessions check
            try:
                session = Sessions.objects.get(user=user_id)

                # Make session in one format with token_created
                session_created_iso = session.created_at
                session_created = session_created_iso.strftime("%Y-%m-%d %H:%M:%S.%f")
                if str(session_created) == str(token_created):
                    return 1  # Token is valid
                else:
                    return -2  # Token is annulled
            except Sessions.DoesNotExist:
                data = {'user': user_id, 'created_at': token_created}
                serializer = SessionsSerializer(data=data)
                if serializer.is_valid():
                    serializer.save()
                    return 1  # Token is valid
                else:
                    return -1  # Token is invalid
        elif token_type == "access":
            return 1 # Token is valid
        else:
            raise('Invalid token type')
    else:
        return -1  # Token is invalid


def authenticate_by_token(token):
    """
    Retrieve user information based on a JWT token.

    Parameters:
    - token (str): JWT token containing user information

    Returns:
    - dict or None: User information as a dictionary or None if token is invalid or expired
    """
    decoded_payload = decode(token, JWT_KEY, algorithms=['HS256'])
    expiration_time = decoded_payload.get('expired', None)
    if expiration_time is not None and datetime.utcnow() > expiration_time:
        return None
    else:
        nickname = str(decoded_payload['nickname'])
        user_id = str(decoded_payload['user_id'])
        user_out = authenticate_user(nickname=nickname, user_id=user_id)
        return user_out

def refresh_access_token(refresh_token, access_token):
    """
    Refreshes an access token using a refresh token.

    Parameters:
    - refresh_token (str): The refresh token.
    - access_token (str): The current access token.

    Returns:
    - tuple: A tuple containing the new access token and an error message.
             If the refresh is successful, the error message will be None.
             If an error occurs, the access token will be None and the error message
             will contain information about the error.
    """
    refresh_validity = token_check(token=refresh_token, token_type="refresh")
    access_validity = token_check(token=access_token, token_type="access")
    error_message = None
    match refresh_validity:
        case 1:
            if access_validity in [0, 1]:
                decoded_payload = decode(refresh_token, JWT_KEY, algorithms=['HS256'])
                nickname = decoded_payload.get('nickname', None)
                user_id = decoded_payload.get('user_id', None)
                access_token = generate_token(nickname=nickname, user_id=user_id, token_type="access", exp_period=15)
                return access_token, None
            else:
                error_message = "Token is invalid"
        case 0:
            error_message = "Refresh token is expired"
        case -1:
            error_message = "Refresh token is invalid"
        case -2:
            error_message = "Refresh token was annulled"

    return None, error_message
