from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Forum, News, NewsComments, User
from .serializers import ForumSerializer, NewsSerializer, NewsCommentsSerializer, UserSerializer

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

class NewsCommentsListAPIView(APIView):
    def get(self, request):
        output = [
            {
                'comment_id': output.comment_id,
                'author_name': output.author_name,
                'author_img': output.author_img,
                'date': output.date,
                'content': output.category,
            } for output in NewsComments.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = NewsCommentsSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

class UserListAPIView(APIView):
    def get(self, request):
        output = [
            {
                'email': output.email,
                'username': output.username,
                'password': output.password,
                'info': output.info,
                'role': output.role,
                'active': output.active,
                'profile_img': output.profile_img,
            } for output in User.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = UserSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)