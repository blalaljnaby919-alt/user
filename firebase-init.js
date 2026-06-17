import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  getDoc,
  serverTimestamp,
  addDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD7cxvC6x1i0t4T45EmPeDuEec2tWWr44E",
  authDomain: "assmk-1fd46.firebaseapp.com",
  projectId: "assmk-1fd46",
  storageBucket: "assmk-1fd46.firebasestorage.app",
  messagingSenderId: "982227752477",
  appId: "1:982227752477:web:e7dc8502871df5f19098f4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;
window.firestore = {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  getDoc,
  serverTimestamp,
  addDoc,
  onSnapshot,
};

window.dispatchEvent(new Event("firebaseReady"));
