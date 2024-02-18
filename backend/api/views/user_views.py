from rest_framework.views import APIView
from rest_framework.response import Response
from jwt import encode, decode, InvalidTokenError
from django.contrib.auth import authenticate
from hashlib import sha256
from os import getenv
from dotenv import load_dotenv
from django.contrib.auth.hashers import check_password

from ..models import User
from ..serializers import UserSerializer


load_dotenv()
JWT_KEY = getenv("JWT_KEY")

def user_check(username, password):
    try:
        user = User.objects.get(username=username, password=password)
        user_out = {
                'id': user.id,
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

def generate_jwt_token(username, password):
    payload = {'username': username, 'password': password}
    token = encode(payload, JWT_KEY, algorithm='HS256')
    return token

def token_check(token):
    decoded_payload = decode(token, JWT_KEY, algorithms=['HS256'])
    username = str(decoded_payload.data.get('username', ''))
    password = str(decoded_payload.data.get('password', ''))
    if user_check(username, password) is not None:
        return True
    else:
        return False

class UserListAPIView(APIView):
    def get(self, request):
        output = [
            {
                'id': output.id,
                'email': output.email,
                'username': output.username,
                'password': output.password,
                'info': output.info,
                'role': output.role,
                'active': output.active,
                'profile_img': output.profile_img,
            } for output in User.objects.all()
        ]
        return Response(output)

class SignInAPIView(APIView):
    def post(self, request):
        username = str(request.data.get('username', ''))
        password = str(request.data.get('password', ''))
        user = user_check(username, password)
        if user is not None:
            token = generate_jwt_token(username, password)
            return Response({'valid': True, 'token': token, 'user_id': user['id']})
        else:
            return Response({'valid': False, 'token': None, 'user_id':None})

class SignUpAPIView(APIView):
    def get(self, request):
        output = [
            {
                'id': output.id,
                'email': output.email,
                'username': output.username,
                'password': output.password,
                'info': output.info,
                'role': output.role,
                'active': output.active,
                'profile_img': output.profile_img,
            } for output in User.objects.all()
        ]
        return Response(output)

    def post(self, request):
        username = str(request.data.get('username', ''))
        password = str(request.data.get('password', ''))
        email = str(request.data.get('email', ''))
        token = generate_jwt_token(username, password)
        user_id = self.generate_id(username, email)

        data = {
            'id': user_id,
            'username': username,
            'email': email,
            'password': password
        }

        serializer = UserSerializer(data = data)
        if serializer.is_valid():
            response_data = {
                'token': token,
            }
            serializer.save()
            return Response(response_data)
        else:
            return Response(serializer.errors, status=400)

    def generate_id(self, username, email):
        combined_string = f"{username}{email}"
        sha256_hash =sha256(combined_string.encode()).hexdigest()
        hash_code = int(sha256_hash, 16)
        hash_code = hash_code % 50000000 + 1
        return hash_code
