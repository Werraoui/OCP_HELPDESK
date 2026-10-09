from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password, check_password
from .models import User, Ticket
from .serializers import UseSerializer, TicketSerializer
from django.contrib.auth import logout as django_logout
from django.shortcuts import redirect
# helpdesk/views.py
from django.http import JsonResponse
import json
from django.contrib.auth.decorators import login_required

@api_view(['GET'])
def test_api(request):
    return Response({'message': 'API fonctionnelle 🎉'})






def my_view(request):
    data = {'message': 'Hello, world!'}
    return JsonResponse(data)


@api_view(['POST'])
def register(request):
    data = request.data
    email = data.get('email')
    password = data.get('password')
    nom = data.get('last_name')
    prenom = data.get('first_name')
    poste = data.get('poste')

    if User.objects.filter(email=email).exists():
        return JsonResponse({'error': 'Email déjà utilisé'}, status=400)

    user = User.objects.create(
        email=email,
        password=make_password(password),
        nom=nom,
        prenom=prenom,
        poste=poste
    )
    return JsonResponse({'message': 'Utilisateur créé avec succès'})

@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    try:
        user = User.objects.get(email=email)
        if check_password(password, user.password):
            serializer = UseSerializer(user)
            return Response(serializer.data)
        else:
            return Response({'error': 'Mot de passe incorrect'}, status=400)
    except User.DoesNotExist:
        return Response({'error': 'Utilisateur non trouvé'}, status=404)

@api_view(['POST'])
def create_ticket(request):
    serializer = TicketSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

def logout_view(request):
    django_logout(request)
    return redirect('/helpdesk/login/')

def index(request):
    return render(request,'helpdesk/index.html')

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class ChatbotAPIView(APIView):
    def post(self, request):
        user_message = request.data.get('message', '')
        # Ici tu mets la logique de réponse du bot
        if 'bonjour' in user_message.lower():
            bot_response = "Bonjour ! Comment puis-je vous aider aujourd'hui ?"
        elif 'merci' in user_message.lower():
            bot_response = "Avec plaisir ! N'hésitez pas si vous avez d'autres questions."
        else:
            bot_response = "Je suis un assistant virtuel. Posez-moi votre question !"
        return Response({'response': bot_response}, status=status.HTTP_200_OK)

from django.urls import path
from .views import ChatbotAPIView

urlpatterns = [
    # ... autres urls ...
    path('api/chatbot/', ChatbotAPIView.as_view(), name='chatbot_api'),
]

@login_required(login_url='/login/')
def dashboard_page(request):
    return render(request, 'helpdesk/dashboard.html')

@login_required(login_url='/login/')
def chatbot_page(request):
    return render(request, 'helpdesk/chatbot.html')

def login_register_page(request):
    return render(request, 'helpdesk/login_register.html')
