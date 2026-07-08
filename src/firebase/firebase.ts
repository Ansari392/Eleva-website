import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYBZBnAbkzu8fCpxwHfryMtrLg4MrlW-U",
  authDomain: "eleva-properties.firebaseapp.com",
  projectId: "eleva-properties",
  storageBucket: "eleva-properties.firebasestorage.app",
  messagingSenderId: "122868778569",
  appId: "1:122868778569:web:26c3497604f085e191e198",
  measurementId: "G-YSP5YSZLYN",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;