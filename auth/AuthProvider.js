import React,{createContext, useState} from 'react'
import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth'
export const AuthContext =     createContext();
export  function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    
    return (
        <AuthContext.Provider value={{ user,setUser,
        login:async(email,password)=>{
            try{
                await auth().signInWithEmailAndPassword(email,password)
            }
        catch(e){
            console.log(e)
        }
        },
        register: async (email,password)=>{
            try {
                await auth().createUserWithEmailAndPassword(email,password)
            } catch (error) {
            console.log(error)
            }
        },
        logout: async ()=>{
            try {
                await auth().signOut()
            } catch (error) {
            console.log(error)
                
            }
        }
        }}>

        </AuthContext.Provider>
    )
}
