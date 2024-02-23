from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import Forum
from ..serializers import ForumSerializer
from ..utils.token_utils import generate_token, get_user_by_data, get_user_by_token, token_check


class ForumListAPIView(APIView):
    def get(self, request):
        output = [
            {
                'id': output.thread_id,
                'creator': output.creator,
                'content': output.content,
                'category': output.category,
            } for output in Forum.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = ForumSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
