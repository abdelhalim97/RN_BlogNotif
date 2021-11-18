import { initializeApp } from "firebase/app";
import {getAuth,onAuthStateChanged} from "firebase/auth";
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBgmzCA6g4KU2i1n-L2-FxNPqAu6kyhrvQ",
  authDomain: "rnblog-d20d4.firebaseapp.com",
  projectId: "rnblog-d20d4",
  storageBucket: "rnblog-d20d4.appspot.com",
  messagingSenderId: "940240129086",
  appId: "1:940240129086:web:bc9f675518408764fc556f",
  measurementId: "G-1ERPKMWPFE"
});
export const auth = getAuth(firebaseConfig);
onAuthStateChanged(auth,user=>{
  if(user!=null){
    console.log('s')
  }
  else{
    console.log('f')
  }
})
// import * as firebase from "firebase"
// const firebaseConfig = {
//   apiKey: "AIzaSyBgmzCA6g4KU2i1n-L2-FxNPqAu6kyhrvQ",
//   authDomain: "rnblog-d20d4.firebaseapp.com",
//   projectId: "rnblog-d20d4",
//   storageBucket: "rnblog-d20d4.appspot.com",
//   messagingSenderId: "940240129086",
//   appId: "1:940240129086:web:bc9f675518408764fc556f",
//   measurementId: "G-1ERPKMWPFE"
// };
// let app;
// if (firebase.apps.length ===0){
//   app = initializeApp(firebaseConfig);
// }else{
//   app= firebase.app()
// }
// const auth = firebase.auth()
// export  {auth};