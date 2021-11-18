import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { store } from './store';
import { StackNavigator } from './components';
import {Provider} from "react-redux";
import {setCustomText,setCustomTextInput} from 'react-native-global-props';
import { BalsamiqSans_400Regular,BalsamiqSans_400Regular_Italic,BalsamiqSans_700Bold,BalsamiqSans_700Bold_Italic} from '@expo-google-fonts/balsamiq-sans'
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native';

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
    color:"#000",
    fontSize: 25,
    fontFamily:'BalsamiqSans_400Regular',
  }
};
setCustomTextInput(customTextInputProps);
setCustomText(customTextProps);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator></StackNavigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}