from ..models import User


def authenticate_user(nickname=None, user_id=None, password=None, email=None):
    """
    Retrieve user information from database based on provided data.

    Parameters:
    - nickname (str): User's nickname (optional)
    - user_id (str): User's unique identifier (optional)
    - password (str): User's password (optional)
    - email (str): User's email (optional)

    Possible combinations:
    - nickname + password (auth)
    - email + password (auth)
    - user_id + nickname (token)

    Returns:
    - dict or None: User information as dictionary or None if user is not found
    """
    try:
        if nickname is not None and password is not None:
            user = User.objects.get(nickname=nickname, password=password)
        elif email is not None and password is not None:
            user = User.objects.get(email=email, password=password)
        elif nickname is not None and user_id is not None:
            user = User.objects.get(nickname=nickname, user_id=user_id)
        user_out = {
            'user_id': user.user_id,
            'email': user.email,
            'nickname': user.nickname,
            'password': user.password,
            'info': user.info,
            'role': user.role,
            'active': user.active,
            'profile_img': user.profile_img,
        }
        return user_out
    except User.DoesNotExist:
        return None



def check_user(nickname, password):
    """
    Retrieve user information from database based on provided data.

    Parameters:
    - nickname (str): User's nickname
    - password (str): User's password

    Returns:
    - True - if data is valid, False - otherwise
    """
    try:
        User.objects.get(nickname=nickname, password=password)
        return True
    except User.DoesNotExist:
        return False


def check_is_unique(nickname=None, email=None):
    """
    Check is nickname unique.

    Parameters:
    - nickname (str): User's nickname (optional)
    - email (str): User's email (optional)

    Returns:
    - True - if data is unique, False - otherwise
    """
    if email is not None:
        try:
            User.objects.get(email=email)
            return False
        except User.DoesNotExist:
            return True
    else:
        try:
            User.objects.get(nickname=nickname)
            return False
        except User.DoesNotExist:
            return True