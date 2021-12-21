import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
	apiKey: "AIzaSyDyxm9F6DTzivO_1jfuiU7QRX0Z5pE2Or0",
	authDomain: "memegram-bef4c.firebaseapp.com",
	projectId: "memegram-bef4c",
	storageBucket: "memegram-bef4c.appspot.com",
	messagingSenderId: "959213637186",
	appId: "1:959213637186:web:a803070d66b201ac8967db",
};

// init firebase
const app = initializeApp(firebaseConfig);

// get firebase auth instance
const auth = getAuth();

// get firebase firestore instance
const db = getFirestore(app);

// get firebase storage instance
const storage = getStorage(app);

export { app as default, auth, db, storage };
