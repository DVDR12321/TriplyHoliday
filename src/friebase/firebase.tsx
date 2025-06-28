import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";

import type { Arrangement } from "../types";

const firebaseConfig = {

    apiKey: "AIzaSyDlkS9y68v2SavLAstVKXJ2zcno_oJ8WmQ",

    authDomain: "triply-holiday-website.firebaseapp.com",

    projectId: "triply-holiday-website",

    storageBucket: "triply-holiday-website.firebasestorage.app",

    messagingSenderId: "1081240272684",

    appId: "1:1081240272684:web:88c504aecd0d9cc89ab689",

    measurementId: "G-Y0JYMHNQGP"

};


const firebaseApp = initializeApp(firebaseConfig);

const dataBase = getFirestore();

export const setNewDocument = async () => {
    const documentRef = doc(dataBase, "arrangements", "appartmnent_three");
    const docSnap = await getDoc(documentRef);

    if (docSnap.exists()) {
        console.log("document allready exists");
        return;
    }
    try {
        await setDoc(documentRef, {
            country: 'Greece',
            city: 'Atina',
            pricePerDay: '10',
            transportation: 'Organizovan prevoz',
            numberOfNights: '5-15',
            availableDates: 'Po upitu',
            description: 'This is a such and such appartment, perfect for families',
            tags: ["Apartman ", "4 kreveta", "WiFi"],
            available: true,
        },
        );
    } catch (error) {
        console.log("failed to create document with error:", error)
    };

    console.log('Document created')
}

export const getAllCollectionDocuments = async (collectionName: string) => {

    const collectionRef = collection(dataBase, collectionName)

    const collectionSnapshot = await getDocs(collectionRef);

    const documentsArray = collectionSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Arrangement, 'id'>),
    }));
    console.log(documentsArray);
    return documentsArray;
}