import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvNBcqWdyJxu-sZgp_FicelSFVYXSlnCo",
  authDomain: "av-2-ivan-projeto-vampirosfoda.firebaseapp.com",
  projectId: "av-2-ivan-projeto-vampirosfoda",
  storageBucket: "av-2-ivan-projeto-vampirosfoda.firebasestorage.app",
  messagingSenderId: "867521954971",
  appId: "1:867521954971:web:bd7cdff13fceb455f8723e",
  measurementId: "G-W2WYK684GF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
