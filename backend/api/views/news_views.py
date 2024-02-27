from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from django.shortcuts import render
from datetime import datetime

from ..models import News, NewsComments
from ..serializers import NewsSerializer, NewsCommentsSerializer
from ..utils.token_utils import generate_token, get_user_by_data, get_user_by_token, token_check
from ..utils.roles_utils import is_admin

class NewsListAPIView(APIView):
    def get(self, request):
        all_news = News.objects.all()

        news_list = []
        for news in all_news:
            news_dict = {
                'newsId': news.news_id,
                'title': news.title,
                'category': news.category,
                'creationDate': news.creation_date,
                'text': news.content_text,
                'mainImg': news.main_img.url if news.main_img else None,
                'logoImg': news.logo_img.url if news.logo_img else None,
                'likes': news.likes,
                'comments': [comment.text for comment in news.comments.all()]
            }
            news_list.append(news_dict)
        return Response(news_list)

class NewsAddAPIViews(APIView):

    parser_classes = [MultiPartParser]

    def post(self, request):
        try:
            title = request.data.get('title', '')
            text = request.data.get('text', '')
            logo_img = request.data.get('logoImg', '')
            main_img = request.data.get('mainImg', '')
            token = request.data.get('token', '')
            category = request.data.get('category', '')
            creation_date = datetime.utcnow()
            try:
                check_result = token_check(token=token, token_type="access")
                if check_result != 1:
                    raise
            except:
                return Response("Token is invalid", status=400)
            input_data = {
                'title': title,
                'content_text': text,
                'logo_img': logo_img,
                'main_img': main_img,
                'creation_date': creation_date,
                'category': category,
            }
            serializer = NewsSerializer(data=input_data)

            if serializer.is_valid():
                saved_news = serializer.save()
                return Response(saved_news.news_id, status=201)
            else:
                return Response(serializer.errors, status=400)
        except Exception as err:
            return Response(str(err), status=400)

class NewsCommentsListAPIView(APIView):
   def post(self, request):
        try:
            content = str(request.data.get('text', ''))
            news_id = str(request.data.get('news', ''))
            token = str(request.data.get('token', ''))

            serializer = NewsCommentsSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        except Exception as err:
            return Response(str(err), status=400)
