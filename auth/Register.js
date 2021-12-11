import React,{useState} from 'react'
import { View, Text,StyleSheet,ImageBackground,KeyboardAvoidingView } from 'react-native'
import {BarReset,HeaderCustom} from '../general'
import { LabelInput,ButtonOpacity } from '../components'
import { useNavigation } from '@react-navigation/core';
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth'
import {auth} from "../firebase"
import { useDispatch } from 'react-redux'
import {setUserRedux} from "../slices/CounterSlices"
import GoogleAuth from './GoogleAuth'

export default function Register() {
    const image ={uri:"https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=385&q=80"}
    const imageUser ={uri:"https://firebasestorage.googleapis.com/v0/b/rnblog-d20d4.appspot.com/o/images%2Fimage404.png?alt=media&token=6b03e815-306f-4cd2-97f3-1a54d999879c"}
    const dispatch = useDispatch()
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [registerDisplayName, setDisplayName] = useState("")
    const [registerImageURL, setImageURL] = useState("")
    const navigation=useNavigation();
    const register = async ()=>{
        try {
        const {user} = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
        await updateProfile(user, {
            'displayName': registerDisplayName,
            'photoURL': registerImageURL.trim().length===0?imageUser:registerImageURL
        })
        dispatch(setUserRedux({
            email:registerEmail,
            pass:registerPassword,
            displayName:registerDisplayName,
            image:registerImageURL.trim().length===0?imageUser:registerImageURL,
        }))
        navigation.navigate("Accueil")
        } catch (error) {
            console.log(error)
        }
    }
    const btn =[
        {
            id:1,
            name:"S'inscrire",
            fnc:register,
        },
    ]
    const data =[
        {
            id:1,
            label:"Nom",
            pass:false,
            value:registerDisplayName,
          },
        {
          id:2,
          label:"E-mail",
          pass:false,
          value:registerEmail,
        },
        
        {
          id:3,
          label:"Mot de passe",
          pass:true,
          value:registerPassword,
        },
        {
            id:4,
            label:"Image de Profile(Option)",
            pass:false,
            value:registerImageURL,
          },
      ]
    return (
        <ImageBackground source={image} resizeMode="cover" style={{height:'100%' }}>
      <View style={{backgroundColor: "#dedace",opacity:0.86,height:'100%'}}></View>
            <View style={{ position:"absolute",width:"100%",height:"100%"}}>
                <BarReset></BarReset>
                <HeaderCustom></HeaderCustom>
                <KeyboardAvoidingView keyboardVerticalOffset={-270}
                behavior={ "position"}
                contentContainerStyle={styles.LogIn}>
                    <View style={{ justifyContent:"flex-start",flexDirection:"row" }}>
                        <Text style={{ color:"#41928D",alignItems:"center",paddingLeft:5,fontSize:28 }}>S'inscrire</Text>
                    </View>
                    <View style={{ alignItems:"center",marginTop:14 }}>
                        <GoogleAuth></GoogleAuth>
                    </View>
                    <View style={{ marginTop:20 }}>
                    {
                        data.map((d)=>
                        <LabelInput key={d.id} icon={d.icon} placeH={d.placeH} label={d.label}
                        iconS={d.iconS} pass={d.pass} value={d.value}
                        onChangeText={text => d.id===1?setDisplayName(text):
                        d.id===2?setRegisterEmail(text):
                        d.id===3?setRegisterPassword(text):
                        setImageURL(text)}>
                        </LabelInput>)
                    }
                    </View>
                    <View style={{ justifyContent:"space-around",marginTop:25,flexDirection: "row"}}>
                    {
                        btn.map((data)=>
                        <ButtonOpacity key={data.id} fnc={data.fnc} name={data.name}
                        disabled={registerEmail.trim().length>0 &&
                            registerPassword.trim().length>0&&
                            registerDisplayName.trim().length>0?false:true}></ButtonOpacity>)
                    }
                    </View>
                </KeyboardAvoidingView>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    LogIn: {
        backgroundColor:"#FFF",
        marginTop:70,
        paddingLeft:25,
        paddingRight:25,
        borderWidth: 1,
        borderColor:"#FFF",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        height: "100%"
    },
  });