from .token_utils import AccessToken
from ..models import User

def admin_check(token : AccessToken) -> bool:
    user = token.check()
    if (user.__class__ != int) and (user.role == 'admin'):
        return True
    else:
        return False
