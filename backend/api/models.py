from django.db import models
from django.contrib.postgres.fields import ArrayField

class Forum(models.Model):
    thread_id = models.AutoField(primary_key=True)
    creator = models.CharField(max_length=255)
    content = models.TextField()
    category = models.CharField(max_length=255, null=True, blank=True)

class NewsComments(models.Model):
    comment_id = models.AutoField(primary_key=True)
    author_name = models.TextField()
    creation_date = models.DateField()
    content = models.TextField()

class News(models.Model):
    news_id = models.AutoField(primary_key=True)
    creation_date = models.DateField()
    content_text = models.TextField()
    content_img = models.TextField()
    category = models.CharField(max_length=255, null=True, blank=True)
    likes = models.IntegerField(default=0)
    comments = models.ManyToManyField(NewsComments, default=[])

    def add_comment(self, content):
        comment = NewsComments.objects.create(content=content)
        self.comments.add(comment)
        return comment.comment_id

    def remove_comment(self, comment_id):
        try:
            comment = self.comments.get(comment_id=comment_id)
            self.comments.remove(comment)
            comment.delete()
            return True
        except NewsComments.DoesNotExist:
            return False

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=128)
    info = models.TextField(null=True, default="")
    role = models.CharField(max_length=20, choices=[('user', 'User'), ('admin', 'Admin')], default='user')
    active = models.BooleanField(default=True)
    profile_img = models.TextField(null=True, default="")

class Sessions(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField()
