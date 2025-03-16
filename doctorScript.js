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

const patientListElement = document.getElementById("patientList");
const patientCountElement = document.getElementById("patientCount");

// Function to remove a patient by their key
function removePatientByKey(key) {
    const appointmentsRef = firebase.database().ref("appointments");
    appointmentsRef.child(key).remove();
}

// Retrieve appointments in real-time
const appointmentsRef = firebase.database().ref("appointments");
appointmentsRef.on("value", function (snapshot) {
    const appointments = snapshot.val();
    const patientCount = snapshot.numChildren();

    patientListElement.innerHTML = "";
    patientCountElement.textContent = patientCount;

    for (const key in appointments) {
        if (Object.hasOwnProperty.call(appointments, key)) {
            const appointment = appointments[key];
            const listItem = document.createElement("li");

            // Create a Remove button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", () => removePatientByKey(key));

            listItem.innerHTML = `
                <span>${appointment.patientName} - ${appointment.appointmentDate}</span>
            `;
            
            // Append Remove button to the listItem
            listItem.querySelector("span").appendChild(removeButton);

            patientListElement.appendChild(listItem);
        }
    }
});