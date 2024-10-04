import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd2YlaXUozETq0DLldJHp-MMfUTPQr9Kw",
  authDomain: "kinatechbrainzblog.firebaseapp.com",
  projectId: "kinatechbrainzblog",
  storageBucket: "kinatechbrainzblog.appspot.com",
  messagingSenderId: "233490506435",
  appId: "1:233490506435:web:05a2eed29ffe290258f876",
  measurementId: "G-DE1VKBLK8X",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
