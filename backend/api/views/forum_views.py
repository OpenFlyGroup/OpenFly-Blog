from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import Forum
from ..serializers import ForumSerializer
from ..response_handler import response_handler

class ForumListAPIView(APIView):
    @response_handler()
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

    @response_handler()
    def post(self, request):
        serializer = ForumSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print(serializer.errors)
            return Response("An error occured", status=400)