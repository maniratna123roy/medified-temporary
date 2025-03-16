import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeXcqOPfdlT7edLCuL1_4gm-U5BanBywU",
  authDomain: "medified-31a2c.firebaseapp.com",
  projectId: "medified-31a2c",
  storageBucket: "medified-31a2c.firebasestorage.app",
  messagingSenderId: "1014446276148",
  appId: "1:1014446276148:web:412a472f59c25440125461",
  measurementId: "G-92DS2E7FDM"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
auth.languageCode = 'en'
const provider= new GoogleAuthProvider();


const googleLogin1= document.getElementById("btnn");
googleLogin1.addEventListener("click",function(){
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href="./doctor.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})

const googleLogin2= document.getElementById("patient");
googleLogin2.addEventListener("click",function(){
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href="./patient.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})


function updateUserProfile(user){
const userName= user.displayName;
const userEmail= user.email;
const userProfilePicture= user.photoURL;
}

document.getElementById("userName").textContent= userName;
document.getElementById("userEmail").textContent= userEmail;
document.getElementById("userProfilePicture").src= userProfilePicture;

updateUserProfile()