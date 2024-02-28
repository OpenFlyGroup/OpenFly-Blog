from django.contrib.auth import authenticate, login
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.contrib.sessions.models import Session
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import User
from ..serializers import UserSerializer
from ..utils.token_utils import generate_token, token_check, refresh_access_token
from ..utils.user_utils import authenticate_user, check_user, check_is_unique


class SignInAPIView(APIView):
    def post(self, request):
        try:
            password = request.data.get('password', '')
            nickname = request.data.get('nickname', '')
            email = request.data.get('email', '')
            if not nickname:
                nickname = None
            if not email:
                email = None

            user = authenticate_user(nickname=nickname, password=password, email=email) # Authenticate user

            if user:
                user_id = user['user_id']
                profile_img = user['profile_img']
                access_token = generate_token(nickname=nickname, user_id=user_id, token_type="access", exp_period=15)
                refresh_token = generate_token(nickname=nickname, user_id=user_id, token_type="refresh", exp_period=30)
                response_data = {
                    'accessToken': access_token,
                    'refreshToken': refresh_token,
                    'nickname': nickname,
                    'profileImg':profile_img
                }
                return Response(response_data, status=201) # Return access and refresh token
            else:
                return Response(f"Invalid {'nickname' if not email else 'email'} or password.", status=400) # Return authentication error
        except Exception as e:
            return Response("An error occurred", status=400) # Return generic error


class SignUpAPIView(APIView):
    def get(self, request): #! INSECURE MUST BE DELETED
        try:
            users = User.objects.all()
            response_data = []
            for user in users:
                response_data.append({
                    'id': user.user_id,
                    'email': user.email,
                    'nickname': user.nickname,
                    'password': user.password,
                    'info': user.info,
                    'role': user.role,
                    'active': user.active,
                    'profile_img': user.profile_img,
                })
            return Response(response_data) #Return all users information
        except Exception as e:
            print(e)
            return Response("An error occurred", status=400) # Return generic error

    def post(self, request):
        try:
            nickname = request.data.get('nickname', '')
            password = request.data.get('password', '')
            email = request.data.get('email', '')

            if not check_is_unique(nickname=nickname):
                return Response("Username already exists", status=400) # Return uniqueness of nickname
            if not check_is_unique(email=email):
                return Response("Email already exists", status=400) # Return uniqueness of email

            input_data = {
                'nickname': nickname,
                'email': email,
                'password': password
            }

            serializer = UserSerializer(data=input_data)
            if serializer.is_valid():
                user = serializer.save()
                user_id = user.user_id
                profile_img = user.profile_img
                access_token = generate_token(nickname=nickname, user_id=user_id, token_type="access", exp_period=15)
                refresh_token = generate_token(nickname=nickname, user_id=user_id, token_type="refresh", exp_period=30)
                response_data = {
                    'accessToken': access_token,
                    'refreshToken': refresh_token,
                    'nickname': nickname,
                    'profileImg':profile_img
                }
                return Response(response_data, status=201) # Return access and refresh token
            else:
                print(serializer.errors)
                return Response("An error occurred", status=400) # Return generic error
        except Exception as e:
            print(e)
            return Response("An error occurred", status=400) # Return generic error

class UpdateTokenAPIView(APIView):
    def post(self, request):
        try:
            access_token = request.data.get('accessToken', '')
            refresh_token = request.data.get('refreshToken', '')
            new_token, error = refresh_access_token(refresh_token, access_token)
            if error:
                print(error)
                return Response("An error occurred", status=400) # Return generic error
            else:
                return Response({'accessToken': new_token}, status=201) # Return new access token
        except Exception as e:
            print(e)
            return Response("An error occurred", status=400) # Return generic error