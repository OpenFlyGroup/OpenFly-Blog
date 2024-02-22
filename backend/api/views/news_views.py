from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import News, NewsComments
from ..serializers import NewsSerializer, NewsCommentsSerializer
from ..utils.token_utils import generate_token, get_user_by_data, get_user_by_token, token_check


class NewsListAPIView(APIView):
    def get(self, request):
        news_instances = News.objects.all()
        serializer = NewsSerializer(news_instances, many=True)
        output = serializer.data
        return Response(output)

    def post(self, request):
        try:
            content_text = request.data.get('content_text', '')
            content_img = request.data.get('content_img', '')
            token = request.data.get('token', '')

            is_valid_token = token_check(token)

            if is_valid_token:
                serializer = NewsSerializer(data=request.data)
                if serializer.is_valid():
                    news_instance = serializer.save()
                    response_data = {'id': news_instance.id}
                    return Response(response_data, status=201) # Return news ID
                else:
                    return Response(serializer.errors, status=400) # Return errors if serialization fails
            else:
                return Response("Invalid token", status=400) # Return error for invalid token
        except Exception as err:
            return Response(str(err), status=400) # Return generic error message


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
