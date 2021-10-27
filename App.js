import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, ImageBackground } from 'react-native';
import { store } from './store';
import LogIn from './auth/LogIn';
import {Provider} from "react-redux";
import {setCustomText} from 'react-native-global-props';
import { BalsamiqSans_400Regular,BalsamiqSans_400Regular_Italic,BalsamiqSans_700Bold,BalsamiqSans_700Bold_Italic} from '@expo-google-fonts/balsamiq-sans'
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'
const image ={uri:"https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=385&q=80"}
export default function App() {
  let[fontsLoaded,error]=useFonts({
    BalsamiqSans_400Regular,BalsamiqSans_400Regular_Italic,BalsamiqSans_700Bold,BalsamiqSans_700Bold_Italic
})
if (!fontsLoaded){return<AppLoading/>}
  const customTextProps = {
  style: {
    fontSize: 25,
    fontFamily:'BalsamiqSans_400Regular',
  }
};
setCustomText(customTextProps);
  return (
    <Provider store={store}>
      <ImageBackground source={image} resizeMode="cover" style={{width: '100%',height:'100%',position:"relative" }}>
        <Text style={{position:"absolute",backgroundColor: "#3A2298",opacity:0.9,width: '100%',height:'100%'}}></Text>
        <LogIn></LogIn>
      </ImageBackground>
      <StatusBar style="auto" />
    </Provider>
  );
}