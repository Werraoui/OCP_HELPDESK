from django.contrib import admin
from .models import User, Ticket

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'nom', 'prenom', 'email', 'poste')

@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'categorie', 'statut', 'date')
    list_filter = ('statut', 'categorie')
    search_fields = ('user__nom', 'categorie', 'statut')

