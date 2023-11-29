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
    console.log("Login function called");
    
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    console.log("Attempting login with email:", email);
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Login successful!", userCredential);
            alert("Login successful!");
        })
        .catch((error) => {
            console.error("Login error:", error);
            alert(error.message);
        });
}

function signup() {
    console.log("Signup function called");

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    console.log("Attempting signup with email:", email);

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Signup successful!", userCredential);
            alert("Sign up successful!");
        })
        .catch((error) => {
            console.error("Signup error:", error);
            alert(error.message);
        });
}
