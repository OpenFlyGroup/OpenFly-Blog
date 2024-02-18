from django.db import models

class Forum(models.Model):
    thread_id = models.BigIntegerField(primary_key=True)
    creator = models.CharField(max_length=255)
    content = models.TextField()
    category = models.CharField(max_length=255, null=True, blank=True)

class News(models.Model):
    news_id = models.BigIntegerField(primary_key=True)
    date = models.DateField()
    content_text = models.TextField()
    content_img = models.TextField()
    category = models.CharField(max_length=255, null=True, blank=True)
    likes = models.IntegerField()

class NewsComments(models.Model):
    comment_id = models.BigIntegerField(primary_key=True)
    author_name = models.TextField()
    author_img = models.TextField()
    date = models.DateField()
    content = models.TextField()

class User(models.Model):
    id = models.BigIntegerField(primary_key=True)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=128)
    info = models.TextField(null=True, default="")
    role = models.CharField(max_length=20, choices=[('user', 'User'), ('admin', 'Admin')], default='user')
    active = models.BooleanField(default=True)
    profile_img = models.TextField(null=True, default="")
