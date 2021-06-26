import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBxDH5eu7Js37GYxOs8fwGLdi9Om01JFqo",
  authDomain: "user-management-a8b8a.firebaseapp.com",
  databaseURL: "https://user-management-a8b8a.firebaseio.com",
  projectId: "user-management-a8b8a",
  storageBucket: "user-management-a8b8a.appspot.com",
  messagingSenderId: "834141311491",
  appId: "1:834141311491:web:229568e102c6c7eb85f436",
  measurementId: "G-4ZM02RPQ9R"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;