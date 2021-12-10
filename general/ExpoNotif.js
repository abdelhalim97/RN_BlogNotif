import React, { useEffect, useState } from 'react';
import { Keyboard, View } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import {ButtonOpacity} from "../components"
import { useNavigation } from '@react-navigation/core';
import { collection,addDoc} from "firebase/firestore"
import { useSelector } from 'react-redux'
import { db } from '../firebase'
 function ExpoNotif(props){
  const navigation=useNavigation();
  const counter = useSelector(state=>state?.counter)
  const [alertedValue, setAlertedValue] = useState(0)
  const postCollectionRef = collection(db,"tasks")
  const [d, setD] = useState()

  useEffect(() => {
  const y =props.date.getFullYear()
  const mm= props.date.getMonth()
  const d =props.date.getDay()
  const h =props.date.getHours()
  const m =props.date.getMinutes()
  const dd=y+"/"+mm+"/"+d+" "+h+":"+m
  setD(dd.toString())
  }, [props.date])
    const createTask=async()=>{
        await addDoc(postCollectionRef,{
            title:props.title,
            email:counter.value.email,
            displayName:counter?.value?.displayName,
            endDateS:d,
            body:props.body,
            img: counter?.value?.gAuth ? counter?.value?.image :"https://firebasestorage.googleapis.com/v0/b/alerte-moi.appspot.com/o/images%2Fimage404.png?alt=media&token=85b01af4-5836-4a4e-baf0-7fc7620574cc"
        })
    }
  const minTime =new Date();
  useEffect(() => {
    setAlertedValue(Math.trunc(Math.abs((props.date-minTime)/1000)))
  }, [props.date])
const onSubmit = () => {
  Keyboard.dismiss();
  const schedulingOptions = {
    content: {
      title: props?.title,
      body: props?.body,
      sound: 'default' | 'defaultCritical' | 'custom' | null,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "blue"
    },
    trigger: {
      seconds: alertedValue,
    },
  };
  // Notifications show only when app is not active.
  // (ie. another app being used or device's screen is locked)
  Notifications.scheduleNotificationAsync(
    schedulingOptions,
  );
  
  navigation.navigate("Accueil")
};
const handleNotification = () => {
  console.warn('ok! got your notif');
};

const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await await Notifications.requestPermissionsAsync();
  if (Constants.isDevice && status === 'granted')
    console.log('Notification permissions granted.');
};

const TimerNotification = () => {

  useEffect(() => {
    askNotification();
    // If we want to do something with the notification when the app
    // is active, we need to listen to notification events and
    // handle them in a callback
    const listener = Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);};
  return (
  <View style={{ marginTop:25 }}>
    <ButtonOpacity fnc={()=>{onSubmit();createTask()}} name="créer une alerte" 
    disabled={minTime!=props.date&&props.title.trim().length>0?false:true}
    ></ButtonOpacity>
  </View>
  )
}
export default ExpoNotif
