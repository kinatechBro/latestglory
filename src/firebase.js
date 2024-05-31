import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjyTxyTGLQFEjBbxpbzjq7nwLN_8k9WBg",
  authDomain: "latestglory-1d5ef.firebaseapp.com",
  projectId: "latestglory-1d5ef",
  storageBucket: "latestglory-1d5ef.appspot.com",
  messagingSenderId: "423735369324",
  appId: "1:423735369324:web:6e4ba59306fb30d0648249",
  measurementId: "G-ETH2DVG9F8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const analytics = getAnalytics(app);