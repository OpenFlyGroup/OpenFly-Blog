from django.urls import path
from .views import *

urlpatterns = [
    path('forum/', ForumListAPIView.as_view(), name='forum-list'),
    path('news/', NewsListAPIView.as_view(), name='news-list'),
    path('info/', InfoListAPIView.as_view(), name='info-list'),
    path('users/', UserListAPIView.as_view(), name='users-list'),

    # path('login/', UserLoginView.as_view(), name='login'),
    # path('signup/', UserCreateView.as_view(), name='signup'),
]