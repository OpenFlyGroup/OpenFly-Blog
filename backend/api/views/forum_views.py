from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import Forum
from ..serializers import ForumSerializer


class ForumListAPIView(APIView):
    def get(self, request):
        output = [
            {
                'thread_id': output.thread_id,
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
