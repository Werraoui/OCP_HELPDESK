document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('chat-form');
  const input = document.getElementById('request');
  const messages = document.getElementById('messages');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const userMsg = input.value.trim();
    if (!userMsg) return;
    const userDiv = document.createElement('div');
    userDiv.className = 'message user';
    userDiv.textContent = userMsg;
    messages.appendChild(userDiv);

    // Appel à l'API backend
    fetch('/api/chatbot/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken') // voir fonction ci-dessous
      },
      body: JSON.stringify({ message: userMsg })
    })
      .then(response => response.json())
      .then(data => {
        const botDiv = document.createElement('div');
        botDiv.className = 'message bot';
        botDiv.textContent = data.response;
        messages.appendChild(botDiv);
        messages.scrollTop = messages.scrollHeight;
      })
      .catch(error => {
        const botDiv = document.createElement('div');
        botDiv.className = 'message bot';
        botDiv.textContent = "Erreur de connexion au serveur.";
        messages.appendChild(botDiv);
      });

    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  });

  // Fonction pour récupérer le CSRF token (nécessaire avec Django)
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
});
