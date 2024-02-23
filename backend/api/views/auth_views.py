from django.contrib.auth import authenticate, login
from django.contrib.sessions.models import Session
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import User
from ..serializers import UserSerializer
from ..utils.token_utils import generate_token, get_user_by_token, token_check, refresh_access_token
from ..utils.user_utils import get_user_by_data, check_user, check_is_unique


class SignInAPIView(APIView):
    def post(self, request):
        try:
            username = request.data.get('nickname', '')
            password = request.data.get('password', '')

            user = get_user_by_data(username=username, password=password) # Authenticate user

            if user:
                user_id = user['user_id']
                access_token = generate_token(username=username, user_id=user_id, token_type="access", exp_period=30)
                refresh_token = generate_token(username=username, user_id=user_id, token_type="refresh", exp_period=30)
                response_data = {
                    'accessToken': access_token,
                    'refreshToken': refresh_token,
                }
                return Response(response_data, status=201) # Return access and refresh token
            else:
                return Response("Invalid username or password.", status=400) # Return authentication error
        except Exception as e:
            return Response("An error occurred: " + str(e), status=400) # Return generic error message


class SignUpAPIView(APIView):
    def get(self, request):
        users = User.objects.all()
        response_data = []
        for user in users:
            response_data.append({
                'id': user.user_id,
                'email': user.email,
                'nickname': user.username,
                'password': user.password,
                'info': user.info,
                'role': user.role,
                'active': user.active,
                'profile_img': user.profile_img,
            })
        return Response(response_data) # Return all users information !!! INSECURE !!!

    def post(self, request):
        username = request.data.get('nickname', '')
        print(username)
        password = request.data.get('password', '')
        email = request.data.get('email', '')

        if not check_is_unique(username=username):
            return Response("Username already exists", status=400) # Return uniqueness of username
        if not check_is_unique(email=email):
            return Response("Email already exists", status=400) # Return uniqueness of email

        input_data = {'username': username, 'email': email, 'password': password}

        serializer = UserSerializer(data=input_data)
        if serializer.is_valid():
            user = serializer.save()
            user_id = user.user_id
            access_token = generate_token(username=username, user_id=user_id, token_type="access", exp_period=30)
            refresh_token = generate_token(username=username, user_id=user_id, token_type="refresh", exp_period=30)
            response_data = {'accessToken': access_token, 'refreshToken': refresh_token}
            return Response(response_data, status=201) # Return access and refresh token
        else:
            return Response(serializer.errors, status=400) # Return generic error message

class UpdateTokenAPIView(APIView):
    def post(self, request):
        access_token = request.data.get('accessToken', '')
        refresh_token = request.data.get('refreshToken', '')
        new_token, error = refresh_access_token(refresh_token, access_token)
        if error:
            return Response(error, status=400) # Return error message
        else:
            return Response({'accessToken': new_token}, status=201) # Return new access token
