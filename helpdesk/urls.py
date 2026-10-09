
from django.urls import path
from .views import register, login, create_ticket, index, logout_view, ChatbotAPIView, dashboard_page, chatbot_page, login_register_page
from . import views

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('logout/', logout_view, name='logout'),
    path('tickets/', create_ticket, name='create_ticket'),
    path('', index, name="index"),
    path('api/chatbot/', ChatbotAPIView.as_view(), name='chatbot_api'),
    path('dashboard/', dashboard_page, name='dashboard_page'),
    path('chatbot/', chatbot_page, name='chatbot_page'),
    path('login-register/', login_register_page, name='login_register_page'),
]

