import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD29evm2gX8afmPyxK5-2chP2yFVJAyUSM",
  authDomain: "planilha-financeira-e91a2.firebaseapp.com",
  projectId: "planilha-financeira-e91a2",
  storageBucket: "planilha-financeira-e91a2.appspot.com",
  messagingSenderId: "1002942893577",
  appId: "1:1002942893577:web:0aeffdfc6182c2da82b2d8",
  measurementId: "G-R0Z3N4PP4P",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);