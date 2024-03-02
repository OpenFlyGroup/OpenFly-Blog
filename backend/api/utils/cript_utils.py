from os import getenv
from dotenv import load_dotenv, find_dotenv
from bcrypt import gensalt, hashpw, checkpw
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from base64 import b64encode, b64decode
from hashlib import sha256
from ast import literal_eval


load_dotenv(find_dotenv())
CYPHER_KEY = getenv("CYPHER_KEY")

def generate_key():
    """
    Generate key for AES encryption using SHA-256.

    Returns:
    - bytes: Generated key
    """
    bytes = CYPHER_KEY.encode('utf-8')
    return sha256(bytes).digest()

KEY = generate_key()

def encrypt(data):
    """
    Encrypt data using AES encryption in ECB mode.

    Parameters:
    - data (str): Data to be encrypted

    Returns:
    - str: Encrypted data as base64-encoded string
    """
    cipher = AES.new(KEY, AES.MODE_ECB)
    encrypted_data = cipher.encrypt(pad(data.encode(), AES.block_size))
    return b64encode(encrypted_data).decode()

def decrypt(encrypted_data):
    """
    Decrypt encrypted data using AES decryption in ECB mode.

    Parameters:
    - encrypted_data (str): Base64-encoded string of encrypted data

    Returns:
    - str: Decrypted data
    """
    cipher = AES.new(KEY, AES.MODE_ECB)
    decrypted_data = unpad(cipher.decrypt(b64decode(encrypted_data)), AES.block_size).decode()
    return decrypted_data


def hash_password(password):
    """
    Hash a password using bcrypt with randomly generated salt.

    Parameters:
    - password (str): Password to be hashed

    Returns:
    - str: Hashed password
    """
    salt = gensalt()
    hashed_password = hashpw(password.encode('utf-8'), salt)
    return str(hashed_password)

def check_password(input_password, stored_password):
    """
    Check if input password matches stored hashed password using bcrypt.

    Parameters:
    - input_password (str): Password input by user
    - stored_password (str): Hashed password stored in database

    Returns:
    - bool: True if passwords match, False otherwise
    """
    stored_bytes = literal_eval(stored_password)
    return checkpw(input_password.encode('utf-8'), stored_bytes)
