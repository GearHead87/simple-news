// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_APIKEY,
	authDomain: import.meta.env.VITE_API_AUTHDOMAIN,
	databaseURL: import.meta.env.VITE_API_DATABASEURL,
	projectId: import.meta.env.VITE_API_PROJECTID,
	storageBucket: import.meta.env.VITE_API_STORAGEBUCKET,
	messagingSenderId: import.meta.env.VITE_API_MESSAGINGSENDERID,
	appId: import.meta.env.VITE_API_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
