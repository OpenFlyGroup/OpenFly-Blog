from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views.forum_views import ForumListAPIView
from .views.news_views import NewsListAPIView, NewsCommentsListAPIView, NewsAddAPIViews
from .views.roles_views import RoleListAPIView, IsAdminAPIView
from .views.auth_views import SignInAPIView, SignUpAPIView, UpdateTokenAPIView
from .views.user_views import ProfileAPIView

urlpatterns = [
    path('forum', ForumListAPIView.as_view(), name='forum-list'),
    path('news', NewsListAPIView.as_view(), name='news-list'),
    path('news/post-create', NewsAddAPIViews.as_view(), name='news-add'),
    path('news/comments', NewsCommentsListAPIView.as_view(), name='news-comments'),
    path('role/is-admin', IsAdminAPIView.as_view(), name='is-admin'),
    path('role/list', RoleListAPIView.as_view(), name='role-list'),
    path('auth/signup', SignUpAPIView.as_view(), name='sign-up'),
    path('auth/signin', SignInAPIView.as_view(), name='sign-in'),
    path('auth/refresh', UpdateTokenAPIView.as_view(), name='sign-in'),
    path('users/profile', ProfileAPIView.as_view(), name='profile'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)