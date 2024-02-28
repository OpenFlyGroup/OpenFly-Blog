from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import Forum
from ..serializers import ForumSerializer
from ..utils.token_utils import token_check


class ForumListAPIView(APIView):
    def get(self, request):
        try:
            output = [
                {
                    'id': output.thread_id,
                    'creator': output.creator,
                    'content': output.content,
                    'category': output.category,
                } for output in Forum.objects.all()
            ]
            return Response(output)
        except Exception as e:
            print(e)
            return Response("An error occurred", status=400) # Return generic error

    def post(self, request):
        try:
            serializer = ForumSerializer(data = request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                print(serializer.errors)
                return Response("An error occured", status=400)
        except Exception as e:
            print(e)
            return Response("An error occurred", status=400) # Return generic error