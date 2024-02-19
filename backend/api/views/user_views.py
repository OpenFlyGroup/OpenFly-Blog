from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import User
from ..serializers import UserSerializer
from ..functions.token_functions import generate_access_token, generate_refresh_token, get_user_by_token, token_check
from ..functions.user_functions import get_user_by_data, check_user


class UserListAPIView(APIView):
    def get(self, request):
        output = [
            {
                'id': output.user_id,
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
        output = [
            {
                'id': output.user_id,
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

        data = {
            'username': username,
            'email': email,
            'password': password
        }

        serializer = UserSerializer(data=data)
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
