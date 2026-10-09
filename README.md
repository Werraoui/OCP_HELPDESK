# OCP Helpdesk — Intelligent IT Support Platform

An intelligent web-based IT support platform developed to facilitate technical assistance, ticket management, and user support. The application combines a Django web backend, an interactive chatbot, and a machine learning module for automatic ticket classification.

## Overview

OCP Helpdesk is designed to help employees submit and track IT support requests through a simple web interface. Users can create accounts, access their dashboard, interact with a chatbot, and manage their support tickets.

The project also includes a machine learning component that explores the automatic classification of IT support messages into predefined categories.

## Features

* **User Authentication:** User registration and login.
* **Ticket Management:** Create and track IT support tickets.
* **Interactive Dashboard:** Access ticket information and navigate the application.
* **IT Support Chatbot:** Interact with a chatbot to receive assistance.
* **Automatic Ticket Classification:** Machine learning module for categorizing support requests.
* **REST API:** Communication between the frontend and backend.
* **Database Management:** Store user accounts and support tickets.
* **Django Administration:** Manage application data through the Django admin interface.

## Technologies Used

### Backend

* Python 3.12
* Django 5.2.4
* Django REST Framework
* SQLite

### Frontend

* HTML5
* CSS3
* JavaScript
* Fetch API

### Machine Learning and NLP

* TensorFlow 2.19.0
* Keras 3.10.0
* Pandas
* NumPy
* Scikit-learn
* NLTK
* Jupyter Notebook

## Machine Learning Module

The project includes a text classification module designed to categorize IT support requests into the following categories:

* Authentication
* Email
* Hardware
* Network
* Printing
* Security
* Software

The machine learning workflow includes text preprocessing, tokenization, model training, evaluation, and prediction.

## Project Structure

```text
OCP_HELPDESK-main/
├── manage.py
├── requirements.txt
├── helpdesk/
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   ├── urls.py
│   └── ...
├── templates/
├── static/
├── tf-project/
│   ├── tensorflow.ipynb
│   └── data_set.csv
├── OCP_screens/
└── README.md
```

*Note: Adapt the directory tree to match the actual folders and files in your project.*

## Installation and Setup

### Prerequisites

* Python 3.12 or compatible version
* pip
* Git (optional)
* A modern web browser

### 1. Clone the Repository

```bash
git clone <repository-url>
cd OCP_HELPDESK-main
```

If you downloaded the project as a ZIP file, extract it and open the project directory in your terminal.

### 2. Create a Virtual Environment

**Windows:**

```bash
python -m venv venv
venv\Scripts\activate
```

**Linux / macOS:**

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

If a `requirements.txt` file is available:

```bash
pip install -r requirements.txt
```

Otherwise, install the backend dependencies:

```bash
pip install django==5.2.4 djangorestframework django-cors-headers
```

The machine learning module may require a separate environment with TensorFlow and its additional dependencies.

### 4. Apply Database Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Start the Development Server

```bash
python manage.py runserver
```

Open the following URL in your browser:

http://127.0.0.1:8000/

The exact page URL depends on the routes configured in the Django project.

## API Endpoints

The following endpoints are documented for the application; verify the URL configuration before using them.

| Method | Endpoint                 | Description                   |
| ------ | ------------------------ | ----------------------------- |
| POST   | `/helpdesk/register/`    | Register a user               |
| POST   | `/helpdesk/login/`       | Authenticate a user           |
| POST   | `/helpdesk/tickets/`     | Create a support ticket       |
| POST   | `/helpdesk/api/chatbot/` | Send a message to the chatbot |
| GET    | `/helpdesk/dashboard/`   | Access the dashboard          |
| GET    | `/helpdesk/chatbot/`     | Open the chatbot interface    |

## Database

The application uses SQLite to store application data, including user accounts and support tickets.

Ticket records can include information such as the user, message, category, creation date, and status.

## Security Considerations

* Passwords should be stored using secure password hashing.
* Django CSRF protection should remain enabled where applicable.
* Authentication and authorization should be enforced on protected views and API endpoints.
* Secret keys and sensitive configuration values should be stored outside version control.
* Debug mode should be disabled in production.
* The bundled virtual environment should not be committed to a public repository.

## Future Improvements

* Improve chatbot response quality and contextual understanding.
* Evaluate the machine learning model on a separate test dataset.
* Integrate automatic ticket classification into the ticket creation workflow.
* Add advanced ticket filtering and reporting.
* Improve responsive design and accessibility.
* Add automated tests and production deployment configuration.

## Author

Developed as an IT support and artificial intelligence project associated with an observation internship at OCP.

## License

Specify the license applicable to this project before distributing or reusing the source code.
