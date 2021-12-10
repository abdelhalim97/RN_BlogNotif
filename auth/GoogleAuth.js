import React from 'react'
import { Image, TouchableHighlight } from 'react-native'
import {GoogleAuthProvider,signInWithCredential} from "firebase/auth";
import { auth } from '../firebase';
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/core';
import * as Google from "expo-google-app-auth";
import { setUserRedux } from '../slices/CounterSlices';
const GoogleAuth = () => {
const imageGoogle ={uri:"https://img.icons8.com/color/96/000000/google-logo.png"};
const navigation=useNavigation()
const dispatch = useDispatch()
    const config={
        iosClientId:"940240129086-9kk3n8ub8m42hv9mdo4lpijdndhdkmkg.apps.googleusercontent.com",
        androidClientId:"940240129086-2elcijmr43u6pnd0dhnkv2atgr7fjh7l.apps.googleusercontent.com",
        scopes:["profile","email"],
        permissions:["public_profile","email","gender","location"]
      }
     const signInWithGoogle = async()=>{
        await Google.logInAsync(config).then(
          async(logInResult)=>{
            if(logInResult.type==="success"){
              const { idToken,accessToken} = logInResult;
              const credential = GoogleAuthProvider.credential(idToken,accessToken)
              await signInWithCredential(auth,credential);
              dispatch(setUserRedux({
                email:auth.currentUser.email,
                displayName:auth.currentUser.displayName,
                image:auth.currentUser.photoURL,
                gAuth:true
              }))
            }
            navigation.navigate("Accueil")
            return Promise.reject()
          }
        ).catch(error=>console.log(error))
      }
    return (
        <TouchableHighlight style={{ borderRadius:50 }} onPress={()=>{signInWithGoogle()}} underlayColor="#E3E3E3">
            <Image source={imageGoogle} style={{height:60,width:60}}/>
        </TouchableHighlight>
    )
}

export default GoogleAuth
