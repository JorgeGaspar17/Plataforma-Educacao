// src/lib/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAteeGltFlfB5BCWSvlJIRegVyQ5Z2uFY",
  authDomain: "educonect-b86a3.firebaseapp.com",
  projectId: "educonect-b86a3",
  storageBucket: "educonect-b86a3.appspot.com",
  messagingSenderId: "190893822940",
  appId: "1:190893822940:web:8bae90c355a83c716f7519"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
