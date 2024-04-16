from typing import Literal
from jwt import encode, decode
from datetime import date, datetime, timedelta
from os import getenv
from dotenv import load_dotenv

from ..models import Sessions, User
from ..serializers import SessionsSerializer
from .user_utils import authenticate_user
from .session_utils import session_update

load_dotenv()
JWT_KEY = getenv("JWT_KEY")
ACCESS_TOKEN_PERIOD = 15
REFRESH_TOKEN_PERIOD = 30


class Token:
    @classmethod
    def __init__(self, token_value : str) -> None:
        self.value = token_value

    @classmethod
    def create(self, user:User) -> None:
        creation_time = datetime.utcnow()
        if self.__name__ == 'AccessToken':
            expiration_time = creation_time + timedelta(minutes=ACCESS_TOKEN_PERIOD)
        elif self.__name__ == 'RefreshToken':
            expiration_time = creation_time + timedelta(days=REFRESH_TOKEN_PERIOD)
            session_error = session_update(creation_time, user.user_id)
            if session_error is not None:
                raise (session_error)
        else:
            raise ('Invalid token_type')
        payload = {
            'token_type': self.__name__,
            'nickname': user.nickname,
            'user_id': user.user_id,
            'created': creation_time.isoformat(),
            'expired': expiration_time.isoformat()
        }
        self.value = encode(payload, JWT_KEY, algorithm='HS256')

    @classmethod
    def check(self) -> User | int:
        decoded_content = decode(self.value, JWT_KEY, algorithms=['HS256'])
        expiration_time_str = decoded_content.get('expired', None)
        expiration_time = datetime.strptime(expiration_time_str, "%Y-%m-%dT%H:%M:%S.%f")
        real_type = decoded_content.get('token_type', None)

        if expiration_time is not None and datetime.utcnow() > expiration_time:  # Expire check
            return -3  # Token expired

        if self.__name__ != real_type:  # Type check
            return -1  # Token invalid

        nickname = decoded_content.get('nickname', None)
        user_id = decoded_content.get('user_id', None)
        creation_date_str = decoded_content.get('created', None)
        creation_date = datetime.strptime(creation_date_str, "%Y-%m-%dT%H:%M:%S.%f")
        user = authenticate_user(nickname=nickname, user_id=user_id)
        if user is not None:
            if self.__name__ == "RefreshToken":
                # Sessions check
                try:
                    session = Sessions.objects.get(user=user_id)

                    # Make session in one format with creation_date
                    session_created_iso = session.created_at
                    session_created = session_created_iso.strftime("%Y-%m-%d %H:%M:%S.%f")
                    if str(session_created) == str(creation_date):
                        return user  # Token valid
                    else:
                        return -2  # Token annulled
                except Sessions.DoesNotExist:
                    data = {'user': user_id, 'created_at': creation_date}
                    serializer = SessionsSerializer(data=data)
                    if serializer.is_valid():
                        serializer.save()
                        return user # Token valid
                    else:
                        return -1  # Token invalid
            elif self.__name__ == "AccessToken":
                return user  # Token valid
            else:
                return -1 # Token invalid
        else:
            return -1  # Token invalid


class RefreshToken(Token):
    value = str


class AccessToken(Token):
    value = str

    @classmethod
    def refresh(self, refresh_token : RefreshToken) -> None | Exception:
        refresh_check = refresh_token.check()
        access_check = self.check()
        error_message = None
        if refresh_check.__class__ != int:
            if access_check != -1:
                user = refresh_check
                access_token = AccessToken
                access_token.create(user=user)
                self = access_token
                return None
            else:
                return access_check
        else:
            return refresh_check

def check_res_to_error(result_code : int):
    error_message = ""
    match result_code:
        case -3:
            error_message = "Token is expired"
        case -1:
            error_message = "Token is invalid"
        case -2:
            error_message = "Token was annulled"
    return error_message