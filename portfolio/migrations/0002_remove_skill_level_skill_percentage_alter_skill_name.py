# Generated by Django 5.2 on 2025-04-23 00:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='skill',
            name='level',
        ),
        migrations.AddField(
            model_name='skill',
            name='percentage',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='skill',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
