import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LogIn,Register} from './auth';
import { Accueil,Profil,CreateAlerte,NotifPage,CreatePost } from './pages';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const user= false;
    return (
        <Stack.Navigator>
            {/* {!user? (<> */}
                <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown:false }}/>
                <Stack.Screen name="Register" component={Register} options={{ headerShown:false }}/>
            {/* </>):(<> */}
            <Stack.Screen name="Accueil" component={Accueil} options={{ headerShown:false }}/>
          <Stack.Screen name="Profil" component={Profil} options={{ headerShown:false }}/>
          <Stack.Screen name="CreateAlerte" component={CreateAlerte} options={{ headerShown:false }}/>
          <Stack.Screen name="NotifPage" component={NotifPage} options={{ headerShown:false }}/>
          <Stack.Screen name="CreatePost" component={CreatePost} options={{ headerShown:false }}/>
            {/* </>)} */}
        </Stack.Navigator>
    )
}

export default StackNavigator
