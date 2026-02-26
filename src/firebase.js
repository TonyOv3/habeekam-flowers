import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
// Make sure to add these variables to a .env file locally mapped to your Firebase project config
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

/**
 * Saves an order to Firestore before redirecting to WhatsApp
 * @param {Object} orderData - The order details to save
 */
export const saveOrderToFirebase = async (orderData) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), {
            ...orderData,
            createdAt: serverTimestamp(),
            status: "pending"
        });
        console.log("Order saved with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document to Firebase: ", e);
        // Even if saving to Firebase fails, we shouldn't block the WhatsApp redirect
        // Return null or throw depending on how strict we want to be
        return null;
    }
};
