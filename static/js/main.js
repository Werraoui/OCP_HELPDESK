const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const wrapper = document.querySelector(".wrapper");
const loginTitle = document.querySelector(".login-title");      // ✅ Corrigé
const registerTitle = document.querySelector(".register-title"); // ✅ Corrigé
const signUpBtn = document.querySelector("#SignUpBtn");
const signInBtn = document.querySelector("#SignInBtn");

function loginFunction() {
  loginForm.style.left = "50%";
  loginForm.style.opacity = 1;
  registerForm.style.left = "150%";
  registerForm.style.opacity = 0;
  wrapper.style.height = "500px";
  loginTitle.style.top = "50%";
  loginTitle.style.opacity = 1;
  registerTitle.style.top = "50px";
  registerTitle.style.opacity = 0;
}

function registerFunction() {
  loginForm.style.left = "-50%";
  loginForm.style.opacity = 0;
  registerForm.style.left = "50%";
  registerForm.style.opacity = 1;
  wrapper.style.height = "580px";
  loginTitle.style.top = "-60px";
  loginTitle.style.opacity = 0;
  registerTitle.style.top = "50%";
  registerTitle.style.opacity = 1;
}

// INSCRIPTION
if (document.querySelector('.register-form')) {
  document.querySelector('.register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const data = {
      email: document.getElementById('reg-email').value,
      password: document.getElementById('reg-pass').value,
      first_name: document.getElementById('reg-prenom').value,
      last_name: document.getElementById('reg-nom').value,
      poste: document.getElementById('reg-poste').value
    };
    fetch('/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-CSRFToken': getCookie('csrftoken') },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          alert('Inscription réussie ! Connectez-vous.');
          // Optionnel : basculer sur le formulaire de login
        }
      });
  });
}

// CONNEXION
if (document.querySelector('.login-form')) {
  document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const data = {
      email: document.getElementById('log-email').value,
      password: document.getElementById('log-pass').value
    };
    fetch('/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-CSRFToken': getCookie('csrftoken') },
      body: JSON.stringify(data)
    })
      .then(async res => {
        const data = await res.json();
        if (!res.ok) {
          alert(data.error || "Erreur lors de la connexion.");
        } else {
          window.location.href = '/dashboard/';
        }
      })
      .catch(() => {
        alert("Erreur de connexion au serveur.");
      });
  });
}

// Fonction pour récupérer le CSRF token
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
