
const firebaseConfig = {
  apiKey: "AIzaSyCqai9KkXMBF6gQDewvV-c7CfKLJTTmY7I",
  authDomain: "opentube-b25a3.firebaseapp.com",
  projectId: "opentube-b25a3",
  storageBucket: "opentube-b25a3.appspot.com",
  messagingSenderId: "646379641022",
  appId: "1:646379641022:web:81e4abe0d95949db02bdf2"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
