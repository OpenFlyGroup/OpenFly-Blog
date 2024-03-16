from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import User
from ..serializers import UserSerializer
from ..utils.token_utils import generate_token, authenticate_by_token
from ..utils.user_utils import authenticate_user, check_is_unique
from ..utils.cript_utils import decrypt, encrypt, hash_password
from ..utils.request_utils import check_not_none

class ProfileAPIView(APIView):
    def get(self, request):
        try:
            access_token = request.data.get('accessToken', '')
            check_not_none(access_token)

            user = authenticate_by_token(access_token)
            if user:
                response_data = {
                    'nickname': user["nickname"],
                    'profileImg':user['profile_img'],
                    'info': user["info"]
                }
                return Response(response_data, status=201) # Return access and refresh token
            else:
                return Response("Invalid token.", status=400) # Return token error
        except Exception as e:
            print(e)
            return Response("An error occurred", status=400) # Return generic error