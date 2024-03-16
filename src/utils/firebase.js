// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {

  apiKey: "AIzaSyDX_W5iokrlOSrpdiO2CwbA0__PfQbkoWU",

  authDomain: "netflix-ai-909f3.firebaseapp.com",

  projectId: "netflix-ai-909f3",

  storageBucket: "netflix-ai-909f3.appspot.com",

  messagingSenderId: "1057587058265",

  appId: "1:1057587058265:web:77fbf9d5f94c80112d0348",

  measurementId: "G-9RP15ZTPQG"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth();