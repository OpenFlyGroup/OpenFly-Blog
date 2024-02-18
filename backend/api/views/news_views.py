from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import News, NewsComments
from ..serializers import NewsSerializer, NewsCommentsSerializer


class NewsListAPIView(APIView):
    def get(self, request):
        output = [
            {
                'news_id': output.news_id,
                'date': output.date,
                'content_text': output.content_text,
                'content_img': output.content_img,
                'category': output.category,
                'likes': output.likes,
            } for output in News.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = NewsSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

class NewsCommentsListAPIView(APIView):
    def get(self, request):
        output = [
            {
                'comment_id': output.comment_id,
                'author_name': output.author_name,
                'author_img': output.author_img,
                'date': output.date,
                'content': output.content,
            } for output in NewsComments.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = NewsCommentsSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)