from os import path, makedirs, remove
from rest_framework import serializers
from .models import Forum, News, NewsComments, User, Sessions
from shutil import copyfileobj

class ForumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forum
        fields = '__all__'

class NewsSerializer(serializers.Serializer):
    title = serializers.CharField()
    content_text = serializers.CharField()
    category = serializers.CharField()
    main_img = serializers.ImageField()
    logo_img = serializers.ImageField()
    creation_date = serializers.DateTimeField(input_formats=['iso-8601'], required=False)

    def create(self, validated_data):
        creation_date = validated_data.pop('creation_date', None)
        news_instance = News.objects.create(**validated_data, creation_date=creation_date)
        folder_name = str(news_instance.news_id)
        image_path = path.join('media', 'news-images', folder_name)
        makedirs(image_path, exist_ok=True)
        self.move_uploaded_file(news_instance.logo_img, path.join(image_path, 'logo-img.jpg'))
        self.move_uploaded_file(news_instance.main_img, path.join(image_path, 'main-img.jpg'))
        news_instance.logo_img.name = path.join('news-images', folder_name, 'logo-img.jpg')
        news_instance.main_img.name = path.join('news-images', folder_name, 'main-img.jpg')
        news_instance.save()
        return news_instance

    def move_uploaded_file(self, uploaded_file, destination_path):
        with open(uploaded_file.path, 'rb') as source:
            with open(destination_path, 'wb') as destination:
                copyfileobj(source, destination)
        remove(uploaded_file.path)

class NewsCommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsComments
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class SessionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sessions
        fields = '__all__'