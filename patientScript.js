// Replace with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeXcqOPfdlT7edLCuL1_4gm-U5BanBywU",
    authDomain: "medified-31a2c.firebaseapp.com",
    projectId: "medified-31a2c",
    storageBucket: "medified-31a2c.firebasestorage.app",
    messagingSenderId: "1014446276148",
    appId: "1:1014446276148:web:412a472f59c25440125461",
    measurementId: "G-92DS2E7FDM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const patientName = document.getElementById("patientName").value;
    const appointmentDate = document.getElementById("appointmentDate").value;

    if (patientName.trim() !== "" && appointmentDate.trim() !== "") {
        const appointmentsRef = firebase.database().ref("appointments");
        appointmentsRef.push({
            patientName: patientName,
            appointmentDate: appointmentDate
        });

        // Clear form fields
        document.getElementById("patientName").value = "";
        document.getElementById("appointmentDate").value = "";
    }
});
