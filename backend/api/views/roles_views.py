from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import User
from ..utils.cript_utils import decrypt, encrypt
from ..utils.roles_utils import admin_check
from ..utils.request_utils import check_not_none

class RoleListAPIView(APIView):
    def get(self, request):
        try:
            users = User.objects.all()
            response_data = []
            for user in users:
                response_data.append({
                    'email': decrypt(user.email),
                    'nickname': decrypt(user.nickname),
                    'role': user.role,
                })
            return Response(response_data) #Return all users information
        except Exception as e:
            print(e)
            return Response("An error occurred", status=400) # Return generic error

    def put(self, request):
        try:
            nickname = request.data.get('nickname', '')
            token = request.data.get('token', '')
            new_role = request.data.get('role', '')
            check_not_none(nickname, token, new_role)

            is_admin = admin_check(token)
            if is_admin:
                try:
                    user = User.objects.get(nickname=encrypt(nickname))
                    user.role = new_role
                    user.save()
                except User.DoesNotExist:
                    return Response("User not found", status=404)
                return Response("Success")
            else:
                return Response("You don't have permission.", status=400)
        except Exception as e:
            print(e)
            return Response("An error occurred", status=400) # Return generic error

class IsAdminAPIView(APIView):
    def post(self, request):
        try:
            token = request.data.get('token', '')
            check_not_none(token)

            response = {
                'isAdmin': admin_check(token)
            }
            return Response(response)
        except Exception as e:
            print(e)
            return Response("An error occurred", status=400) # Return generic error
