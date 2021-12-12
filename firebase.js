import { initializeApp } from "firebase/app";
import {getAuth,onAuthStateChanged} from "firebase/auth";
import {getFirestore} from "@firebase/firestore"
import env from "./env"

const firebaseConfig = initializeApp({
  apiKey: env.API_KEY,
   authDomain: env.AUTH_Domain,
   projectId: env.PROJECT_ID,
   storageBucket: env.STORAGE_BUCKET,
   messagingSenderId:env.MESSAGING_SENDER_ID,
   appId: env.APP_ID,
   measurementId: env.MEASUREMENT_ID
});

export const auth = getAuth(firebaseConfig);
export const db=getFirestore()
onAuthStateChanged(auth,user=>{
  if(user!=null){
    console.log('s')
  }
  else{
    console.log('f')
  }
})