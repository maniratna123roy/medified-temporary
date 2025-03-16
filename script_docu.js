// Replace with your Firebase configuration
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

const storage = firebase.storage();
const storageRef = storage.ref();

document.addEventListener('DOMContentLoaded', () => {
    displayUploadedDocuments();
});

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const timestamp = new Date().getTime();
        const fileName = `${timestamp}_${file.name}`;
        const fileRef = storageRef.child(fileName);

        fileRef.put(file).then(snapshot => {
            console.log('File uploaded successfully:', snapshot);

            // Display the documents immediately after upload
            displayUploadedDocuments();
        }).catch(error => {
            console.error('Error uploading file: ', error);
        });
    } else {
        console.error('No file selected.');
    }
}

function displayUploadedDocuments() {
    const documentList = document.getElementById('documentList');

    storageRef.listAll().then(result => {
        documentList.innerHTML = '';

        result.items.forEach(item => {
            const fileName = item.name;

            // Get the download URL using a separate call
            item.getDownloadURL().then(downloadUrl => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.textContent = fileName;

                listItem.appendChild(link);
                documentList.appendChild(listItem);
            }).catch(error => {
                console.error('Error getting download URL: ', error);
            });
        });
    }).catch(error => {
        console.error('Error fetching documents: ', error);
    });
}

