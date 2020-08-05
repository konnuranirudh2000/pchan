import firebase from "firebase";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDcD-KWgcj27qwKaUTVjSAVnrnjceepUCs",
  authDomain: "pchan-3ef9d.firebaseapp.com",
  databaseURL: "https://pchan-3ef9d.firebaseio.com",
  projectId: "pchan-3ef9d",
  storageBucket: "pchan-3ef9d.appspot.com",
  messagingSenderId: "600468128524",
  appId: "1:600468128524:web:6aae9236831dbe3f8dff29",
  measurementId: "G-0FDX1JSHEV"
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database();
export { database };
export { storage, firebase as deafult };
