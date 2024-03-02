# Generated by Django 4.2.6 on 2024-02-29 12:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_rename_content_img_news_title_news_logo_img_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="news",
            name="logo_img",
            field=models.ImageField(upload_to="news-images/"),
        ),
        migrations.AlterField(
            model_name="news",
            name="main_img",
            field=models.ImageField(upload_to="news-images/"),
        ),
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.CharField(max_length=128, unique=True),
        ),
        migrations.AlterField(
            model_name="user",
            name="profile_img",
            field=models.TextField(default="/media/user-images/default.svg", null=True),
        ),
    ]