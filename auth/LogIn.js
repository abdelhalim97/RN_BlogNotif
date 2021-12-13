import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableHighlight,KeyboardAvoidingView,ImageBackground  } from 'react-native';
import {BarReset,HeaderCustom} from '../general';
import { faCheck,faEye } from '@fortawesome/free-solid-svg-icons'
import {LabelInput,ButtonOpacity} from '../components/';
import { useNavigation } from '@react-navigation/core';
import {auth} from "../firebase"
import { signInWithEmailAndPassword } from '@firebase/auth';
import { useDispatch } from 'react-redux'
import {setUserRedux} from "../slices/CounterSlices"
import GoogleAuth from "./GoogleAuth"

function LogIn() {
  const image ={uri:"https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=385&q=80"}
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation=useNavigation();
  const login = async()=>{
    try {
      const {user} =await signInWithEmailAndPassword(auth,email,password)
      dispatch(setUserRedux({
        email,
        pass:password,
        displayName:user.displayName,
        image:user.photoURL,
      }))
      navigation.navigate("Accueil");
    } catch (error) {
      console.log(error)
    }
  }
  const btn =[
    {
        id:1,
        name:"LogIn",
        fnc:login,
    },
]
  const data =[
  {
    id:1,
    label:"E-mail",
    placeH:"Type your Email here",
    icon:faCheck,
    iconS:20,
    type:false,
    value:email,
  },
  {
    id:2,
    label:"Mot de passe",
    placeH:"Type your pass here",
    icon:faEye,
    iconS:20,
    type:true,
    value:password,
  }
]
    return (
      <ImageBackground source={image} resizeMode="cover" style={{height:'100%' }}>
      <View style={{backgroundColor: "#dedace",opacity:0.86,height:'100%'}}></View>
      <View style={{ width:"100%",height:"100%",position:"absolute" }}>
        <BarReset></BarReset>
        <HeaderCustom></HeaderCustom>
            <KeyboardAvoidingView keyboardVerticalOffset={-433}
            behavior={ "position"}
             contentContainerStyle={styles.LogIn}>
              <Text style={{ color:"#41928D",alignItems:"center",fontSize:28 }}>Connexion</Text>
              <View style={{ alignItems:"center",marginTop:14 }}>
                <GoogleAuth></GoogleAuth>
              </View>
              <View style={{ marginTop:20 }}>
                {
                data.map((d)=>
                <LabelInput key={d.id} icon={d.icon} placeH={d.placeH} label={d.label} 
                iconS={d.iconS} pass={d.type} value={d.value}
                onChangeText={text => d.id===1?setEmail(text):setPassword(text)}>
                </LabelInput>)
                }
              </View>
              <View style={{ justifyContent:"center",marginTop:23,flexDirection: "row"}}>
                {
                btn.map((data)=>
                <ButtonOpacity key={data.id} fnc={data.fnc} name={data.name}></ButtonOpacity>)
                }
              </View>
              <View style={{ flexDirection:"row",marginTop:10 }}>
                <TouchableHighlight disabled>
                  <Text style={{ color:"gray",fontSize:14 }}>vous n'avez pas encore de compte?</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#E3E3E3"
                  onPress={()=> {navigation.navigate("Register")}}>
                    <Text style={{ color:"#41928D",fontSize:14 }}> S'inscrire</Text>
                  </TouchableHighlight>
                {/* <TouchableHighlight underlayColor="#E3E3E3"
                onPress={()=> {navigation.navigate("Accueil")}}>
                  <Text style={{ color:"#41928D",fontSize:14 }}> test mode</Text>
                </TouchableHighlight> */}
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
export default LogIn
