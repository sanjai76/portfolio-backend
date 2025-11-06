from django.urls import path
from . import views

urlpatterns = [
    path('admin-login/', views.admin_login, name='admin_login'),
    path('logout/', views.admin_logout, name='admin_logout'),
    path('manage-gallery/', views.manage_gallery, name='manage_gallery'),
    path('edit-gallery/<int:id>/', views.edit_gallery, name='edit_gallery'),
    path('gallery/', views.gallery_view, name='gallery'),
    path('', views.home, name='home'),
]
