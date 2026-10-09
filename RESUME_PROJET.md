# RÉSUMÉ EXÉCUTIF - OCP HELPDESK

## 🎯 CONCEPT DU PROJET

**OCP Helpdesk** est une plateforme web de gestion de tickets d'assistance développée pour l'Office Chérifien des Phosphates (OCP). L'application permet aux employés de créer, suivre et gérer des demandes de support technique via une interface web moderne incluant un chatbot interactif. Le projet intègre également un module de machine learning (tf-project) utilisant TensorFlow pour la classification automatique des tickets.

### Fonctionnalités Clés
- ✅ Authentification utilisateur (inscription/connexion)
- ✅ Création et gestion de tickets de support
- ✅ Chatbot interactif pour l'assistance
- ✅ Tableau de bord de visualisation
- ✅ Classification automatique des tickets (Machine Learning)
- ✅ Interface d'administration Django

---

## 🔑 MOTS-CLÉS TECHNIQUES

### Backend
- **Django 5.2.4** - Framework web Python
- **Django REST Framework** - API REST
- **SQLite3** - Base de données
- **Python** - Langage de programmation
- **ORM Django** - Mapping objet-relationnel
- **Serializers** - Sérialisation des données
- **APIView** - Vues API basées sur les classes
- **@api_view** - Décorateurs API
- **Password Hashing** - Hashage des mots de passe
- **Session Authentication** - Authentification par session

### Frontend
- **HTML5** - Structure web
- **CSS3** - Styles et design
- **JavaScript (Vanilla)** - Interactivité
- **Fetch API** - Requêtes HTTP asynchrones
- **DOM Manipulation** - Manipulation du DOM
- **AJAX** - Communication asynchrone
- **CSRF Token** - Protection CSRF

### Sécurité & Architecture
- **CORS** - Cross-Origin Resource Sharing
- **CSRF Protection** - Protection CSRF
- **RESTful Architecture** - Architecture REST
- **MVT Pattern** - Model-View-Template
- **Middleware** - Middleware Django

### Machine Learning & IA (tf-project)
- **TensorFlow 2.19.0** - Framework de deep learning
- **Keras 3.10.0** - API haut niveau pour TensorFlow
- **NLTK** - Natural Language Toolkit
- **Neural Networks** - Réseaux de neurones
- **CNN (Convolutional Neural Network)** - Réseau convolutif pour NLP
- **Text Classification** - Classification automatique de textes
- **NLP (Natural Language Processing)** - Traitement du langage naturel
- **Tokenization** - Découpage du texte en tokens
- **Embedding** - Représentation vectorielle des mots
- **Label Encoding** - Encodage des labels
- **Text Preprocessing** - Préprocessing des textes (stemming, stopwords)
- **Model Training** - Entraînement du modèle
- **Model Saving** - Sauvegarde du modèle (.h5, .keras)
- **Jupyter Notebook** - Environnement de développement interactif

### Data Science
- **Pandas** - Manipulation de données
- **NumPy** - Calculs numériques
- **Scikit-learn** - Bibliothèque de machine learning
- **Joblib** - Sauvegarde d'objets Python
- **Pickle** - Sérialisation d'objets
- **Train-Test Split** - Division des données
- **Accuracy Score** - Évaluation de précision
- **Classification Report** - Rapport de classification

### Fonctionnalités
- **Chatbot API** - API de chatbot avec ML
- **Ticket Management** - Gestion de tickets
- **User Management** - Gestion des utilisateurs
- **CRUD Operations** - Opérations CRUD
- **Migrations** - Migrations de base de données
- **Automatic Ticket Categorization** - Catégorisation automatique des tickets

---

## 📦 STACK TECHNIQUE COMPLÈTE

| Catégorie | Technologies |
|-----------|-------------|
| **Backend Framework** | Django 5.2.4 |
| **API Framework** | Django REST Framework 3.16.0 |
| **Base de données** | SQLite3 |
| **Langage** | Python 3.12 |
| **Frontend** | HTML5, CSS3, JavaScript |
| **Sécurité** | CORS, CSRF, Password Hashing |
| **Architecture** | REST API, MVT Pattern |
| **Machine Learning** | TensorFlow 2.19.0, Keras 3.10.0 |
| **NLP** | NLTK, Text Classification |
| **Data Science** | Pandas, NumPy, Scikit-learn |
| **Notebook** | Jupyter Notebook |

---

## 🏗️ ARCHITECTURE

```
Client (Browser)
    ↓
HTML/CSS/JavaScript
    ↓
Fetch API / AJAX
    ↓
Django REST Framework
    ↓
Django Views & Serializers
    ↓
Django ORM
    ↓
SQLite Database

Machine Learning Pipeline (tf-project)
    ↓
Jupyter Notebook
    ↓
Data Preprocessing (NLTK, Pandas)
    ↓
TensorFlow/Keras Model
    ↓
Text Classification (CNN)
    ↓
Model Training & Evaluation
    ↓
Model Saving (.h5, .pkl)
```

---

## 📝 MODÈLES DE DONNÉES

### User
- nom, prénom, email, poste, password

### Ticket
- user (ForeignKey), message, catégorie, date, statut

### Modèle ML (tf-project)
- **Architecture** : Sequential Model avec Embedding + Conv1D + Dense
- **Catégories** : Authentication, Email, Hardware, Network, Printing, Security, Software
- **Précision** : ~98.5% sur les données de test
- **Fichiers** : tensorflow.ipynb, data_set.csv, label_Encoder.pkl

---

## 🚀 ENDPOINTS API

- `POST /helpdesk/register/` - Inscription
- `POST /helpdesk/login/` - Connexion
- `POST /helpdesk/tickets/` - Création de ticket
- `POST /helpdesk/api/chatbot/` - Chatbot API
- `GET /helpdesk/dashboard/` - Tableau de bord
- `GET /helpdesk/chatbot/` - Page chatbot

---

*Document généré automatiquement*

