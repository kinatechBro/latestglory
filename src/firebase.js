import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyBjyTxyTGLQFEjBbxpbzjq7nwLN_8k9WBg",
  // authDomain: "latestglory-1d5ef.firebaseapp.com",
  // projectId: "latestglory-1d5ef",
  // storageBucket: "latestglory-1d5ef.appspot.com",
  // messagingSenderId: "423735369324",
  // appId: "1:423735369324:web:6e4ba59306fb30d0648249",
  // measurementId: "G-ETH2DVG9F8"

  apiKey: "AIzaSyBxa27ASzmfdys1-b2Yp0zhq2GTJjO5I9U",
  authDomain: "fir-learn-312e7.firebaseapp.com",
  projectId: "fir-learn-312e7",
  storageBucket: "fir-learn-312e7.appspot.com",
  messagingSenderId: "725463842110",
  appId: "1:725463842110:web:34104d203268e0c3c3c06f",
  measurementId: "G-8X562WND23",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
