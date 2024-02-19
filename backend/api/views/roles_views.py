from rest_framework.views import APIView
from rest_framework.response import Response
from os import getenv
from dotenv import load_dotenv

from ..models import User
from ..serializers import UserSerializer
from ..functions.token_functions import generate_access_token, generate_refresh_token, get_user_by_token, token_check
from ..functions.user_functions import get_user_by_data, check_user, check_is_unique

load_dotenv()
ADMIN_KEY = getenv("ADMIN_KEY")

class RoleListAPIView(APIView):
    def get(self, request):
        response_data = [
            {
                'username': response_data.username,
                'role': response_data.role,
                'profile_img': response_data.profile_img,
            } for response_data in User.objects.all()
        ]
        return Response(response_data)

    def post(self, request):
        username = str(request.data.get('username', ''))
        admin_key = str(request.data.get('admin_key', ''))
        new_role = str(request.data.get('role', ''))
        if admin_key == ADMIN_KEY:
            serializer = UserSerializer(username=username, role=new_role)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        else:
            return Response("Wrong key.", status=400)