import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { store } from './store';
import {LogIn,Register} from './auth/';
import {Provider} from "react-redux";
import {setCustomText,setCustomTextInput} from 'react-native-global-props';
import { BalsamiqSans_400Regular,BalsamiqSans_400Regular_Italic,BalsamiqSans_700Bold,BalsamiqSans_700Bold_Italic} from '@expo-google-fonts/balsamiq-sans'
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const image ={uri:"https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=385&q=80"}
export default function App() {
  let[fontsLoaded,error]=useFonts({
    BalsamiqSans_400Regular,BalsamiqSans_400Regular_Italic,BalsamiqSans_700Bold,BalsamiqSans_700Bold_Italic
})
if (!fontsLoaded){return<AppLoading/>}
const customTextInputProps = {
  underlineColorAndroid: 'rgba(0,0,0,0)',
  style: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 5,
  }
};
  const customTextProps = {
  style: {
    fontSize: 25,
    fontFamily:'BalsamiqSans_400Regular',
  }
};
setCustomTextInput(customTextInputProps);
setCustomText(customTextProps);
const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown:false }}/>
          <Stack.Screen name="Register" component={Register} options={{ headerShown:false }}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}