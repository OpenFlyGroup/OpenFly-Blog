from ..models import User


def get_user_by_data(username=None, user_id=None, password=None):
    """
    Retrieve user information from database based on provided data.

    Parameters:
    - username (str): User's username (optional)
    - user_id (str): User's unique identifier (optional)
    - password (str): User's password (optional)

    Returns:
    - dict or None: User information as dictionary or None if user is not found
    """
    try:
        if user_id is not None and password is not None:
            user = User.objects.get(username=username, user_id=user_id, password=password)
        elif user_id is not None:
            user = User.objects.get(username=username, user_id=user_id)
        elif password is not None:
            user = User.objects.get(username=username, password=password)
        else:
            user = User.objects.get(username=username)
        user_out = {
            'user_id': user.user_id,
            'email': user.email,
            'username': user.username,
            'password': user.password,
            'info': user.info,
            'role': user.role,
            'active': user.active,
            'profile_img': user.profile_img,
        }
        return user_out
    except User.DoesNotExist:
        return None



def check_user(username, password):
    """
    Retrieve user information from database based on provided data.

    Parameters:
    - username (str): User's username
    - password (str): User's password

    Returns:
    - True - if data is valid, False - otherwise
    """
    try:
        User.objects.get(username=username, password=password)
        return True
    except User.DoesNotExist:
        return False

def check_is_unique(username=None, email=None):
    """
    Check is username unique.

    Parameters:
    - username (str): User's username (optional)
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
            User.objects.get(username=username)
            return False
        except User.DoesNotExist:
            return True
