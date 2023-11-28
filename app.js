
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

// Reference to the authentication service
const auth = firebase.auth();

function signIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      window.location.href = 'en.html';
    })
    .catch((error) => {
      console.error(error.message);
    });
}

function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.error(error.message);
    });
}
