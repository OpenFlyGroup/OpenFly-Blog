from jwt import encode, decode
from datetime import datetime, timedelta
from os import getenv
from dotenv import load_dotenv

from ..models import User
from .user_functions import get_user_by_data

load_dotenv()
JWT_KEY = getenv("JWT_KEY")

def generate_access_token(username, user_id, expiration_minutes=30):
    """
    Generate a JWT token based on user information.

    Parameters:
    - username (str): User's username
    - user_id (str): User's unique identifier
    - expiration_minutes (int): Token expiration time in minutes

    Returns:
    - str: Generated JWT token
    """
    creation_time = datetime.utcnow()
    expiration_time = creation_time + timedelta(minutes=expiration_minutes)
    payload = {
        'username': username,
        'user_id': user_id,
        'created': creation_time.isoformat(),
        'expired': expiration_time.isoformat()
    }
    token = encode(payload, JWT_KEY, algorithm='HS256')
    return token


def generate_refresh_token(username, user_id, expiration_days=30):
    """
    Generate a refresh token based on user information.

    Parameters:
    - username (str): User's username
    - user_id (str): User's unique identifier

    Returns:
    - str: Generated refresh token
    """
    creation_time = datetime.utcnow()
    expiration_time = creation_time + timedelta(days=expiration_days)
    payload = {
        'username': username,
        'user_id': user_id,
        'created': creation_time.isoformat(),
        'expired': expiration_time.isoformat()
    }
    refresh_token = encode(payload, JWT_KEY, algorithm='HS256')
    return refresh_token

def token_check(token):
    """
    Check the validity of a JWT token.

    Parameters:
    - token (str): JWT token to be checked

    Returns:
    - bool: True - if the token is valid, False - otherwise
    """
    decoded_payload = decode(token, JWT_KEY, algorithms=['HS256'])
    expiration_time = decoded_payload.get('expired', None)
    if expiration_time is not None and datetime.utcnow() > expiration_time:
        return False
    else:
        username = str(decoded_payload['username'])
        user_id = str(decoded_payload['user_id'])
        user = get_user_by_data(username=username, user_id=user_id)
        return user is not None

def get_user_by_token(token):
    """
    Retrieve user information based on a JWT token.

    Parameters:
    - token (str): JWT token containing user information

    Returns:
    - dict or None: User information as a dictionary or None if the token is invalid or expired
    """
    decoded_payload = decode(token, JWT_KEY, algorithms=['HS256'])
    expiration_time = decoded_payload.get('expired', None)
    if expiration_time is not None and datetime.utcnow() > expiration_time:
        return None
    else:
        username = str(decoded_payload['username'])
        user_id = str(decoded_payload['user_id'])
        user_out = get_user_by_data(username=username, user_id=user_id)
        return user_out