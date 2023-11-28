// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
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
      })
      .catch(error => {
          console.error(error.message);
      });
});
