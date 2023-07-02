import { collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";

export const firestore= getFirestore(app);

//Car collection

export const cardCollection = collection(firestore,"card");