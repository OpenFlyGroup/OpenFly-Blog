from django.db import models
from django.contrib.auth.backends import ModelBackend


class Forum(models.Model):
    thread_id = models.AutoField(primary_key=True)
    creator = models.CharField(max_length=255)
    content = models.TextField()
    category = models.CharField(max_length=255, null=True, blank=True)


class NewsComments(models.Model):
    comment_id = models.AutoField(primary_key=True)
    author_name = models.TextField()
    creation_date = models.DateField()
    text = models.TextField()


class News(models.Model):
    news_id = models.AutoField(primary_key=True)
    title = models.TextField(default="")
    category = models.CharField(max_length=255, null=True, blank=True)
    creation_date = models.DateField()
    content_text = models.TextField()
    main_img = models.ImageField(upload_to='news-images/')
    logo_img = models.ImageField(upload_to='news-images/')
    likes = models.IntegerField(default=0)
    comments = models.ManyToManyField(NewsComments, default=[])


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    email = models.CharField(max_length=255, unique=True)
    nickname = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    info = models.TextField(null=True, default="Your profile info here")
    role = models.CharField(max_length=20, choices=[('user', 'User'), ('admin', 'Admin')], default='user')
    active = models.BooleanField(default=True)
    profile_img = models.TextField(null=True, default="/media/user-images/default.svg")

    def change_nickname():
        pass

    def change_password():
        pass


class Sessions(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField()
