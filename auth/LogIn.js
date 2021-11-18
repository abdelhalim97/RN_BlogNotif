import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableHighlight, Image,KeyboardAvoidingView,ImageBackground  } from 'react-native';
import {BarReset,HeaderCustom} from '../general';
import { faCheck,faEye } from '@fortawesome/free-solid-svg-icons'
import {LabelInput,ButtonOpacity} from '../components/';
import { useNavigation } from '@react-navigation/core';
import CheckBox from 'react-native-check-box'
import { signInWithEmailAndPassword,onAuthStateChanged } from '@firebase/auth';
import {auth} from "../firebase"
const imageGoogle ={uri:"https://img.icons8.com/color/96/000000/google-logo.png"};
const image ={uri:"https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=385&q=80"}

function LogIn() {
  const [CB, setCB] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation=useNavigation();
  const handleRedirectionAccueil=()=>{
        navigation.navigate("Accueil");
    }
const [user, setUser] = useState({})

    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
  })
  const login = async()=>{
    try {
      const user =await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
      console.log(error)
    }
  }
  const btn =[
    {
        id:1,
        name:"LOGIN",
        fnc:(handleRedirectionAccueil,login),
    },
]
  const data =[
  {
    id:1,
    label:"Email",
    placeH:"Type your Email here",
    icon:faCheck,
    iconS:20,
    type:false,
    value:email,
  },
  {
    id:2,
    label:"Password",
    placeH:"Type your pass here",
    icon:faEye,
    iconS:20,
    type:true,
    value:password,
  }
]
    return (
      <ImageBackground source={image} resizeMode="cover" style={{height:'100%' }}>
      <View style={{backgroundColor: "#3A2298",opacity:0.86,height:'100%'}}></View>
      <View style={{ width:"100%",height:"100%",position:"absolute" }}>
        <BarReset></BarReset>
        <HeaderCustom></HeaderCustom>
            <KeyboardAvoidingView keyboardVerticalOffset={-503}
            behavior={Platform.OS === "ios" ? "padding" : "position"} contentContainerStyle={styles.LogIn}>
              <Text style={{ color:"#3A2298",alignItems:"center" }}>Log In</Text>
              <View style={{ flexDirection:"row" }}>
              <TouchableHighlight disabled>
              <Text style={{ color:"gray",fontSize:14 }}>You don't have an account yet?
              </Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#E3E3E3"
                onPress={()=> {navigation.navigate("Register")}}>
                  <Text style={{ color:"red",fontSize:14 }}> Register now</Text>
                </TouchableHighlight>
              </View>
              <View style={{ marginTop:20 }}>
                {
                data.map((d)=>
                <LabelInput key={d.id} icon={d.icon} placeH={d.placeH} label={d.label} 
                iconS={d.iconS} pass={d.type} value={d.value}
                onChangeText={text => d.id===1?setEmail(text):setPassword(text)}
                >
                </LabelInput>)
                }
                </View>
                <View style={{ flexDirection:"row",justifyContent:"space-between" }}>
                  <View style={{ flexDirection:"row" }}>
                    <CheckBox onClick={()=>{
                    setCB({isChecked:!CB.isChecked})}}
                    isChecked={CB.isChecked} checkBoxColor="#3A2298" ></CheckBox>
                    <Text style={{ fontSize:14 }}>Remember me</Text>
                  </View>
                  <TouchableHighlight onPress={()=> {console.log("ff")}} underlayColor="#E3E3E3">
                    <Text style={{ fontSize:14 }}>Forgot password</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ justifyContent:"space-around",marginTop:25,flexDirection: "row"}}>
                {
                btn.map((data)=>
                <ButtonOpacity key={data.id} fnc={data.fnc} name={data.name}></ButtonOpacity>)
                }
              </View>
              <View style={{ alignItems:"center",marginTop:14 }}>
                <Image source={imageGoogle} style={{height:60,width:60}}/>
              </View>
              <View><Text>{user?.email}</Text></View>

            </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    )
}
const styles = StyleSheet.create({
    LogIn: {
      backgroundColor:"#FFF",
      marginTop:70,
      paddingLeft:10,
      paddingRight:10,
      borderWidth: 1,
      borderColor:"#FFF",
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      height: "100%"
    },
  });
export default LogIn
