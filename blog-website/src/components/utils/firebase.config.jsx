import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBXeZ_UnZRKR-3fPiXTZVqYDv3oPWGoKsg",
  authDomain: "paperflite-blog.firebaseapp.com",
  projectId: "paperflite-blog",
  storageBucket: "paperflite-blog.appspot.com",
  messagingSenderId: "100079915065",
  appId: "1:100079915065:web:cb25ff58a4d1dc0a9afde8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

