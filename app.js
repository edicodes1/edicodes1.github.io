// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmUhBfF6x8YxljEcpruBxx1bMKVn8FkSU",
  authDomain: "edicodes.firebaseapp.com",
  projectId: "edicodes",
  storageBucket: "edicodes.appspot.com",
  messagingSenderId: "643619931425",
  appId: "1:643619931425:web:b2a5eacd46f40f5680aa60",
  measurementId: "G-62Q03G63BG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to authentication service
const auth = firebase.auth();

// Login form
const loginForm = document.getElementById('login');
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
      .then(() => {
          console.log('Login successful');
          // Redirect to another page after successful login
          window.location.href = 'dashboard.html';
      })
      .catch(error => {
          console.error(error.message);
      });
});

// Signup form
const signupForm = document.getElementById('signup');
signupForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
          console.log('Signup successful');
          // Redirect to another page after successful signup
          window.location.href = 'en.html';
      })
      .catch(error => {
          console.error(error.message);
      });
});
