# Generated by Django 5.0.2 on 2024-02-19 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0011_newscomments_news"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="newscomments",
            name="author_img",
        ),
        migrations.AlterField(
            model_name="user",
            name="user_id",
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
