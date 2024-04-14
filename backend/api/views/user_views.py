from rest_framework.views import APIView
from rest_framework.response import Response

from ..utils.token_utils import AccessToken, check_res_to_error
from ..utils.request_utils import check_not_none
from ..models import User

class ProfileAPIView(APIView):
    def get(self, request):
        try:
            token_req = request.data.get('accessToken', '')
            check_not_none(token_req)
            token = AccessToken
            token.init(token_value=token_req)
            check_res = token.check()
            if check_res.__class__ != int:
                user = check_res
                response_data = {
                    'nickname': user.nickname,
                    'profileImg':user.profile_img,
                    'info': user.info
                }
                return Response(response_data, status=201) # Return profile info
            else:
                return Response(check_res_to_error(check_res), status=401) # Return token error
        except Exception as e:
            print(e)
            return Response("An error occurred", status=400) # Return generic error