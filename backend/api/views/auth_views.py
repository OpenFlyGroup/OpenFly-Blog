from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import User
from ..serializers import UserSerializer
from ..functions.token_functions import generate_access_token, generate_refresh_token, get_user_by_token, token_check
from ..functions.user_functions import get_user_by_data, check_user, check_is_unique


class SignInAPIView(APIView):
    def post(self, request):
        username = str(request.data.get('username', ''))
        password = str(request.data.get('password', ''))
        user = get_user_by_data(username=username, password=password)
        if user is not None:
            user_id = user['user_id']
            access_token = generate_access_token(username, user_id)
            refresh_token = generate_refresh_token(username, user_id)

            response_data = {
                'access_token': access_token,
                'refresh_token': refresh_token,
            }

            return Response(response_data)
        else:
            return Response("Invalid data.", status=400)

class SignUpAPIView(APIView):
    def get(self, request):
        response_data = [
            {
                'id': response_data.user_id,
                'email': response_data.email,
                'username': response_data.username,
                'password': response_data.password,
                'info': response_data.info,
                'role': response_data.role,
                'active': response_data.active,
                'profile_img': response_data.profile_img,
            } for response_data in User.objects.all()
        ]
        return Response(response_data)

    def post(self, request):
        username = str(request.data.get('username', ''))
        password = str(request.data.get('password', ''))
        email = str(request.data.get('email', ''))

        if not check_is_unique(username=username):
            return Response("Username already exists", status=400)

        if not check_is_unique(username=username):
            return Response("Email already exists", status=400)

        input_data = {
            'username': username,
            'email': email,
            'password': password
        }

        serializer = UserSerializer(data=input_data)
        if serializer.is_valid():
            serializer.save()
            user_id = serializer.data['user_id']
            access_token = generate_access_token(username, user_id)
            refresh_token = generate_refresh_token(username, user_id)

            response_data = {
                'access_token': access_token,
                'refresh_token': refresh_token,
            }

            return Response(response_data)
        else:
            return Response(serializer.errors, status=400)