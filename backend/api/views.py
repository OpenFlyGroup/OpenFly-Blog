from rest_framework import generics
from .models import Forum, News, Info, User
from .serializers import ForumSerializer, NewsSerializer, InfoSerializer, UserSerializer

class ForumListAPIView(generics.ListCreateAPIView):
    queryset = Forum.objects.all()
    serializer_class = ForumSerializer

class NewsListAPIView(generics.ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class InfoListAPIView(generics.ListCreateAPIView):
    queryset = Info.objects.all()
    serializer_class = InfoSerializer

class UserListAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer