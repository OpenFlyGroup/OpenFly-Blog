from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from django.shortcuts import render
from datetime import datetime

from ..models import News, NewsComments
from ..serializers import NewsSerializer, NewsCommentsSerializer
from ..utils.token_utils import generate_token, get_user_by_data, get_user_by_token, token_check


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
                'contentText': news.content_text,
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

            input_data = {
                'title': title,
                'content_text': text,
                'logo_img': logo_img,
                'main_img': main_img,
                'token': token,
                'creation_date': creation_date,
                'category': category,
            }
            serializer = NewsSerializer(data=input_data)

            if serializer.is_valid():
                saved_news = serializer.save()
                print(saved_news.news_id)
                return Response(saved_news.news_id, status=201)
            else:
                return Response(serializer.errors, status=400)
        except Exception as err:
            return Response(str(err), status=400)

class NewsCommentsListAPIView(APIView):
    def get(self, request):
        news_instances = NewsComments.objects.all()
        serializer = NewsCommentsSerializer(news_instances, many=True)
        output = serializer.data
        return Response(output)

    def post(self, request):
        try:
            content = str(request.data.get('content', ''))
            token = str(request.data.get('token', ''))

            serializer = NewsCommentsSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        except Exception as err:
            return Response(str(err), status=400)
