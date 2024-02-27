from django.db import models


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
    title = models.TextField()
    category = models.CharField(max_length=255, null=True, blank=True)
    creation_date = models.DateField()
    content_text = models.TextField()
    main_img = models.ImageField(upload_to='news_images/')
    logo_img = models.ImageField(upload_to='news_images/')
    likes = models.IntegerField(default=0)
    comments = models.ManyToManyField(NewsComments, default=[])

    def get_logo_img_url(self):
        return self.get_image_url(self.logo_img)

    def get_main_img_url(self):
        return self.get_image_url(self.main_img)

    def get_image_url(self, image_field):
        if image_field and hasattr(image_field, 'url'):
            return image_field.url
        return ''

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
