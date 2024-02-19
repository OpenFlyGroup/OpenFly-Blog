from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import News, NewsComments
from ..serializers import NewsSerializer, NewsCommentsSerializer
from ..functions.token_functions import generate_access_token, get_user_by_data, get_user_by_token, token_check

class NewsListAPIView(APIView):
    def get(self, request):
        news_instances = News.objects.all()
        serializer = NewsSerializer(news_instances, many=True)
        output = serializer.data
        return Response(output)

    def post(self, request):
        content_text = str(request.data.get('content_text', ''))
        content_img = str(request.data.get('content_img', ''))
        token = str(request.data.get('token', ''))

        valid = token_check(token)
        if valid:
            serializer = NewsSerializer(data = request.data)
            response_data = {
                'id': valid
            }
            if serializer.is_valid():
                serializer.save()
                return Response(response_data['news_id'])
            else:
                return Response(serializer.errors, status=400)
        else:
            return Response("Invalid input", status=400)

# eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaDMxNDQyM24zZDNvZSIsInBhc3N3b3JkIjoiaGFzM2hlZF9wYXNzd29yZF9oZXJlIn0.Z7n4b8PqjmL-apY5LwWFwBOs1arRtwC-OKQ33Sn6-kE
class NewsCommentsListAPIView(APIView):
    def get(self, request):
        news_instances = NewsComments.objects.all()
        serializer = NewsCommentsSerializer(news_instances, many=True)
        output = serializer.data
        return Response(output)

    def post(self, request):
        content = str(request.data.get('content', ''))
        token = str(request.data.get('token', ''))

        serializer = NewsCommentsSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)