# Generated by Django 5.0.2 on 2024-03-16 12:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0012_newscomments_text_alter_news_title"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="newscomments",
            name="author_name",
        ),
        migrations.AddField(
            model_name="newscomments",
            name="author",
            field=models.ForeignKey(
                default="", on_delete=django.db.models.deletion.CASCADE, to="api.user"
            ),
            preserve_default=False,
        ),
    ]