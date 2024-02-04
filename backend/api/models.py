from django.db import models

class Forum(models.Model):
    thread_id = models.AutoField(primary_key=True)
    creator = models.CharField(max_length=255)
    content = models.TextField()
    category = models.CharField(max_length=255, null=True, blank=True)

class News(models.Model):
    news_id = models.AutoField(primary_key=True)
    date = models.DateField()
    content = models.TextField()
    category = models.CharField(max_length=255, null=True, blank=True)

class Info(models.Model):
    info_id = models.AutoField(primary_key=True)
    project = models.CharField(max_length=255)
    content = models.TextField()

class User(models.Model):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=128)
    info = models.TextField(blank=True)
    role = models.CharField(max_length=20, choices=[('user', 'User'), ('admin', 'Admin')], default='user')
    active = models.BooleanField(default=True)
