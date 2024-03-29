# Generated by Django 4.2.6 on 2024-02-29 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0008_user_email_user_nickname_user_password"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.CharField(max_length=40, unique=True),
        ),
        migrations.AlterField(
            model_name="user",
            name="nickname",
            field=models.CharField(max_length=30, unique=True),
        ),
        migrations.AlterField(
            model_name="user",
            name="password",
            field=models.CharField(max_length=50),
        ),
    ]
