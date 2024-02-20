from django.urls import path
from .views.forum_views import ForumListAPIView
from .views.news_views import NewsListAPIView, NewsCommentsListAPIView
from .views.roles_views import RoleListAPIView
from .views.auth_views import SignInAPIView, SignUpAPIView


urlpatterns = [
    path('forum', ForumListAPIView.as_view(), name='forum-list'),
    path('news', NewsListAPIView.as_view(), name='news-list'),
    path('news_comments', NewsCommentsListAPIView.as_view(), name='news-list'),
    path('roles_change', RoleListAPIView.as_view(), name='role-list'),
    # path('role/list', RoleListAPIView.as_view(), name='role-list'),
    path('auth/signup', SignUpAPIView.as_view(), name='sign-up'),
    path('auth/signin', SignInAPIView.as_view(), name='sign-in'),
    path('auth/signin/access-token', SignInAPIView.as_view(), name='sign-in'),

]
