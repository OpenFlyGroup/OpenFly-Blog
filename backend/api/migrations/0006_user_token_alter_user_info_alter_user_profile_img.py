# Generated by Django 5.0.1 on 2024-02-18 05:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0005_alter_user_id"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="token",
            field=models.TextField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="user",
            name="info",
            field=models.TextField(default="", null=True),
        ),
        migrations.AlterField(
            model_name="user",
            name="profile_img",
            field=models.TextField(default="", null=True),
        ),
    ]