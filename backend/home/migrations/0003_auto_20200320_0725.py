# Generated by Django 2.2.11 on 2020-03-20 07:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0002_load_initial_data"),
    ]

    operations = [
        migrations.CreateModel(
            name="Test",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("test", models.BigIntegerField()),
            ],
        ),
        migrations.AddField(
            model_name="customtext",
            name="name",
            field=models.BinaryField(blank=True, null=True),
        ),
    ]
