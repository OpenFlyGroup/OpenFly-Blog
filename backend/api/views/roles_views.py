from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import User
from ..utils.token_utils import AccessToken
from ..utils.cript_utils import decrypt, encrypt
from ..utils.roles_utils import admin_check
from ..utils.request_utils import check_not_none
from ..response_handler import response_handler

class RoleListAPIView(APIView):
    @response_handler
    def get(self, request):
        users = User.objects.all()
        response_data = []
        for user in users:
            response_data.append({
                'email': decrypt(user.email),
                'nickname': decrypt(user.nickname),
                'role': user.role,
            })
        return Response(response_data) #Return all users information

    @response_handler
    def put(self, request):
        nickname = request.data.get('nickname', '')
        token_req = request.data.get('token', '')
        new_role = request.data.get('role', '')
        check_not_none(nickname, token_req, new_role)

        token = AccessToken(token_value=token_req)
        # ! TOKEN CHECK FUNC
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

class IsAdminAPIView(APIView):
    @response_handler
    def post(self, request):
        token_req = request.data.get('token', '')
        check_not_none(token_req)
        token = AccessToken(token_value=token_req)
        response = {
            'isAdmin': admin_check(token)
        }
        return Response(response)
