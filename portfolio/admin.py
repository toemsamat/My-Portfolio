from django.contrib import admin
from .models import  Profile, Skill, Experience, Project, BlogPost, ContactMessage

admin.site.register(Profile)
admin.site.register(Skill)
admin.site.register(Experience)
admin.site.register(Project)
admin.site.register(BlogPost)
admin.site.register(ContactMessage)
# admin.site.register(Certificate)

# Register your models here.
