import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFeBC41WBf6Qf3OAaF6UQ8cy80mcA4Xy8",
  authDomain: "chat-demo-ca46e.firebaseapp.com",
  databaseURL: "https://chat-demo-ca46e.firebaseio.com",
  projectId: "chat-demo-ca46e",
  storageBucket: "",
  messagingSenderId: "1005626683829",
  appId: "1:1005626683829:web:72e1dc90dbab90d8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();

export default dbRef;
