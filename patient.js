import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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
  
  const user=auth.currentUser;
  function updateUserProfile(user){
    const userName= user.displayName;
    const userEmail= user.email;
    const userProfilePicture= user.photoURL;
    console.log(userEmail)

    document.getElementById("userName").textContent= "Mr. "+userName;
    //document.getElementById("userEmail").textContent= userEmail;
    document.getElementById("userProfilePicture").src= userProfilePicture;
  }
  
  onAuthStateChanged(auth,(user) =>{
    if(user)
    {
        updateUserProfile(user);
        const uid=user.uid;
        return uid;
    }
    else
    {
        alert("Create Account and Login");
        window.location.href="./index.html";
    }
  });