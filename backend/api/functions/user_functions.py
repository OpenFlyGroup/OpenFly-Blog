from ..models import User


def get_user_by_data(username=None, user_id=None, password=None):
    """
    Retrieve user information from the database based on provided data.

    Parameters:
    - username (str): User's username (optional)
    - user_id (str): User's unique identifier (optional)
    - password (str): User's password (optional)

    Returns:
    - dict or None: User information as a dictionary or None if the user is not found
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
    Retrieve user information from the database based on provided data.

    Parameters:
    - username (str): User's username
    - password (str): User's password

    Returns:
    - True - if the data is valid, False - otherwise
    """
    try:
        User.objects.get(username=username, password=password)
        return True
    except User.DoesNotExist:
        return False
