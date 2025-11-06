from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .forms import AdminLoginForm, GalleryForm
from .models import GalleryImage

# 🔐 Custom admin login
def admin_login(request):
    if request.user.is_authenticated:
        return redirect('manage_gallery')

    form = AdminLoginForm(request, data=request.POST or None)
    if request.method == 'POST' and form.is_valid():
        user = form.get_user()
        login(request, user)
        return redirect('manage_gallery')
    return render(request, 'admin_login.html', {'form': form})

# 🚪 Logout
def admin_logout(request):
    logout(request)
    return redirect('admin_login')

# 🧑‍💼 Manage gallery (Add, Edit, Delete)
@login_required(login_url='admin_login')
def manage_gallery(request):
    images = GalleryImage.objects.all().order_by('-uploaded_at')
    form = GalleryForm(request.POST or None, request.FILES or None)

    # Add new
    if request.method == 'POST' and 'add' in request.POST and form.is_valid():
        form.save()
        return redirect('manage_gallery')

    # Delete
    if request.method == 'POST' and 'delete_id' in request.POST:
        img_id = request.POST.get('delete_id')
        GalleryImage.objects.filter(id=img_id).delete()
        return redirect('manage_gallery')

    return render(request, 'manage_gallery.html', {'form': form, 'images': images})

# ✏️ Edit gallery image
@login_required(login_url='admin_login')
def edit_gallery(request, id):
    image = get_object_or_404(GalleryImage, id=id)
    form = GalleryForm(request.POST or None, request.FILES or None, instance=image)
    if request.method == 'POST' and form.is_valid():
        form.save()
        return redirect('manage_gallery')
    return render(request, 'edit_gallery.html', {'form': form, 'image': image})

# 🌍 Public gallery view
def gallery_view(request):
    images = GalleryImage.objects.all().order_by('-uploaded_at')
    return render(request, 'gallery.html', {'images': images})
from .models import GalleryImage

def home(request):
    gallery_items = GalleryImage.objects.all().order_by('-uploaded_at')
    return render(request,'index.html', {'gallery_items': gallery_items})

