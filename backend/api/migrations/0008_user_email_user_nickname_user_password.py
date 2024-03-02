# Generated by Django 4.2.6 on 2024-02-29 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0007_remove_user_email_remove_user_hashs_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="email",
            field=models.BinaryField(default=b"", unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="user",
            name="nickname",
            field=models.BinaryField(default=b"", unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="user",
            name="password",
            field=models.BinaryField(default=b""),
            preserve_default=False,
        ),
    ]