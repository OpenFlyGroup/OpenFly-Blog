# Generated by Django 4.2.6 on 2024-02-29 13:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0006_user_hashs"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="user",
            name="email",
        ),
        migrations.RemoveField(
            model_name="user",
            name="hashs",
        ),
        migrations.RemoveField(
            model_name="user",
            name="nickname",
        ),
        migrations.RemoveField(
            model_name="user",
            name="password",
        ),
    ]
