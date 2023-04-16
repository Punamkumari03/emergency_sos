
import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";

import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEvV5T1L_mHds_vr_SUuOKwPvv-iP9GLc",
  authDomain: "chat-for-help-f6603.firebaseapp.com",
  projectId: "chat-for-help-f6603",
  storageBucket: "chat-for-help-f6603.appspot.com",
  messagingSenderId: "64123196099",
  appId: "1:64123196099:web:6cb7cb870a5e06e2cb4876"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()