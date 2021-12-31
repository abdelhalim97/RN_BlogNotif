import React,{useState} from 'react'
import { View, Text,StyleSheet,ImageBackground,KeyboardAvoidingView, Image } from 'react-native'
import {BarReset,HeaderCustom} from '../general'
import { LabelInput,ButtonOpacity } from '../components'
import { ImagePickerComponent,TakePhotoComponent } from '../components/API'
import { useNavigation } from '@react-navigation/core';
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth'
import {auth} from "../firebase"
import { useDispatch } from 'react-redux'
import {setUserRedux} from "../slices/CounterSlices"
import GoogleAuth from './GoogleAuth'

export default function Register() {
    const img404 = "https://firebasestorage.googleapis.com/v0/b/rnblog-d20d4.appspot.com/o/images%2F404.png?alt=media&token=2188db36-cb25-4fbc-a7e2-eda5eeacbc23"
    const image ={uri:"https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=385&q=80"}
    const imageUser ="https://firebasestorage.googleapis.com/v0/b/rnblog-d20d4.appspot.com/o/images%2Fimage404.png?alt=media&token=6b03e815-306f-4cd2-97f3-1a54d999879c"
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
            'photoURL': registerImageURL.length===0?imageUser:registerImageURL
        })
        dispatch(setUserRedux({
            email:registerEmail,
            pass:registerPassword,
            displayName:registerDisplayName,
            image:registerImageURL.length===0?imageUser:registerImageURL,
        }))
        navigation.navigate("Accueil")
        } catch (error) {
            console.log(error)
        }
    }
    const btn =[
        {
            id:3,
            fnc:register,
            name:"SignUp"
        },
    ]
    const data =[
        {
            id:1,
            label:"Name",
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
          label:"Password",
          pass:true,
          value:registerPassword,
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
                    <Text style={{ color:"#41928D",alignSelf:"flex-start",fontSize:28 }}>SignUp</Text>
                    <View style={{ marginTop:10 }}>
                        <GoogleAuth></GoogleAuth>
                    </View>
                    {
                        data.map((d)=>
                        <LabelInput key={d.id} label={d.label} pass={d.pass} value={d.value}
                        onChangeText={text => d.id===1?setDisplayName(text):
                        d.id===2?setRegisterEmail(text):setRegisterPassword(text)}
                        keyboardType={d.id===2?"email-address":"default"}>
                        </LabelInput>)
                    }
                    <View style={{ flexDirection:"row",marginVertical:18 }}>
                        <View style={{ flexDirection:"row",flex:0.5,justifyContent:"space-around" }}>
                            <ImagePickerComponent setImageURL={setImageURL}></ImagePickerComponent>
                            <TakePhotoComponent setImageURL={setImageURL}></TakePhotoComponent>
                        </View>
                        <View style={{ flexDirection:"row",flex:0.5,justifyContent:"center" }}>
                            <Image resizeMode="cover" source={{ uri:registerImageURL.length>0?registerImageURL:img404 }} 
                            style={{borderRadius:50,width:53,height:53}}></Image>
                        </View>
                    </View>
                    
                        {btn.map((data)=>
                            <ButtonOpacity key={data.id} fnc={data.fnc} name={data.name}
                            disabled={data.id !== 3||registerEmail.trim().length>0 &&
                                registerPassword.trim().length>0&&
                                registerDisplayName.trim().length>0?false:true}
                            ></ButtonOpacity>
                        ) }
                </KeyboardAvoidingView>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    LogIn: {
        alignItems:"center",
        backgroundColor:"#FFF",
        marginTop:70,
        paddingLeft:25,
        paddingRight:25,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        height: "100%",
    },
  });