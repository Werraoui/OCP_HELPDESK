from django.db import models

class User(models.Model):

    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    poste = models.CharField(max_length=100)
    password = models.CharField(max_length=128)

    def __str__(self):
        return f"{self.prenom}{self.nom}"
    

class Ticket(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    categorie = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)
    statut = models.CharField(max_length=50, default="non traité")

    def __str__(self):
        return f"Ticket #{self.id} - {self.categorie}"