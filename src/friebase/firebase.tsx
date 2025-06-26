import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";

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
    const documentRef = doc(dataBase, "arrangements", "appartmnent_one");
    const docSnap = await getDoc(documentRef);

    if (docSnap.exists()) {
        console.log("document allready exists");
        return;
    }
    try {
        await setDoc(documentRef, {
            city: 'Thesaloniki',
            available: true,
            pricePerDay: '50e',
            description: 'This is a such and such appartment, perfect for families',
            tags: ["appartment", "seaside", "condo", "beach"],
            utilities: ["jacuzzi", "wifi", "air condition", "free parking", "airport shuttle"],
        });
    } catch (error) {
        console.log("failed to create document with error:", error)
    };

    console.log('Document created')
}

export const getAllCollectionDocuments = async () => {

    const collectionRef = collection(dataBase, "arrangements")

    const collectionSnapshot = await getDocs(collectionRef);

    const documentsArray = collectionSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));

    console.log(documentsArray);

}