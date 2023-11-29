// Initialize Firebase
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

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful!");
        })
        .catch((error) => {
            alert(error.message);
        });
}

function signup() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Sign up successful!");
        })
        .catch((error) => {
            alert(error.message);
        });
}
