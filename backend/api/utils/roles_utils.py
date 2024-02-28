from jwt import encode, decode
from datetime import datetime, timedelta
from os import getenv
from dotenv import load_dotenv

from .token_utils import authenticate_by_token
from .session_utils import session_update


def is_admin(token):
    user = authenticate_by_token(token)
    if user['role'] == 'admin':
        return True
    else:
        return False
