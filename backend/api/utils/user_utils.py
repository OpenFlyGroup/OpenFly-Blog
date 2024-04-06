from ..models import User
from .cript_utils import decrypt, encrypt, check_password, hash_password
from hashlib import md5

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
        user = None
        if nickname is not None and password is not None:
            user = User.objects.get(nickname=encrypt(nickname))
            if not check_password(password, user.password):
                user = None
        elif email is not None and password is not None:
            user = User.objects.get(email=encrypt(email))
            if not check_password(password, user.password):
                user = None
        elif nickname is not None and user_id is not None:
            user = User.objects.get(
                nickname=encrypt(nickname), user_id=user_id)

        if not user:
            return None
        user_out = {
            'user_id': user.user_id,
            'email': decrypt(user.email),
            'nickname': decrypt(user.nickname),
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
        user = User.objects.get(nickname=encrypt(nickname))
        return check_password(password, user['password'])
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
            User.objects.get(email=encrypt(email))
            return False
        except User.DoesNotExist:
            return True
    else:
        try:
            User.objects.get(nickname=encrypt(nickname))
            return False
        except User.DoesNotExist:
            return True


def generate_nickname(email):
    vowels = 'aeiou'
    consonants = 'bcdfghjklmnpqrstvwxyz'
    hashed_email = md5(email.encode()).hexdigest()
    hashed_email = [(chr(int(i) + 97) if i.isdigit() else i)
                    for i in hashed_email]
    nickname = ''
    for char in hashed_email:
        if len(nickname) >= 15:
            break
        if char in consonants:
            nickname += char
            if len(nickname) < 15:
                nickname += vowels[int(ord(char)) % len(vowels)]
        elif char in vowels:
            nickname += consonants[int(ord(char)) % len(consonants)]
    while len(nickname) < 15:
        nickname += consonants[int(hashed_email[0], 16) % len(consonants)]

    return nickname
