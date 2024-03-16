from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import User
from ..serializers import UserSerializer
from ..utils.token_utils import generate_token, refresh_access_token
from ..utils.user_utils import authenticate_user, check_is_unique
from ..utils.cript_utils import decrypt, encrypt, hash_password
from ..utils.request_utils import check_not_none

class SignInAPIView(APIView):
    def post(self, request):
        try:
            password = request.data.get('password', '')
            nickname = request.data.get('nickname', '')
            email = request.data.get('email', '')
            print(password)
            print(email)
            if not nickname:
                nickname = None
                check_not_none(password, email)
            if not email:
                email = None
                check_not_none(password, nickname)

            user = authenticate_user(nickname=nickname, password=password, email=email) # Authenticate user
            if user:
                user_id = user['user_id']
                profile_img = user['profile_img']
                access_token = generate_token(nickname=user["nickname"], user_id=user_id, token_type="access", exp_period=15)
                refresh_token = generate_token(nickname=user["nickname"], user_id=user_id, token_type="refresh", exp_period=30)
                response_data = {
                    'accessToken': access_token,
                    'refreshToken': refresh_token,
                    'user': {
                        'email': user['email'],
                        'nickname': user['nickname'],
                        'avatarPath': profile_img,
                        'isAdmin': False,
                        'isActive': True
                    }
                }
                return Response(response_data, status=201) # Return access and refresh token
            else:
                return Response(f"Invalid {'nickname' if not email else 'email'} or password.", status=400) # Return authentication error
        except Exception as e:
            print(e)
            return Response("An error occurred", status=400) # Return generic error


class SignUpAPIView(APIView):
    def get(self, request): #! INSECURE MUST BE DELETED
        try:
            users = User.objects.all()
            response_data = []
            for user in users:
                response_data.append({
                    'id': user.user_id,
                    'email': decrypt(user.email),
                    'nickname': decrypt(user.nickname),
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
            check_not_none(nickname, password, email)

            if not nickname or not email or not email:
                return Response("Not enough data", status=400) # Return error
            if not check_is_unique(nickname=nickname):
                return Response("Nickname already exists", status=400) # Return uniqueness of nickname
            if not check_is_unique(email=email):
                return Response("Email already exists", status=400) # Return uniqueness of email

            input_data = {
                'nickname': encrypt(nickname),
                'email': encrypt(email),
                'password': hash_password(password)
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
                    'user': {
                        'email': email,
                        'nickname': nickname,
                        'avatarPath': profile_img,
                        'isAdmin': False,
                        'isActive': True
                    }
                }
                return Response(response_data, status=201) # Return access and refresh token
            else:
                return Response("An error occurred", status=400) # Return generic error
        except Exception as e:
            print(e)
            return Response("An error occurred", status=400) # Return generic error

class UpdateTokenAPIView(APIView):
    def post(self, request):
        try:
            access_token = request.data.get('accessToken', '')
            refresh_token = request.data.get('refreshToken', '')
            check_not_none(refresh_token, access_token)
            new_token, error = refresh_access_token(refresh_token, access_token)
            if error:
                print(error)
                return Response("An error occurred", status=400) # Return generic error
            else:
                return Response({'accessToken': new_token}, status=201) # Return new access token
        except Exception as e:
            print(e)
            return Response("An error occurred", status=400) # Return generic error