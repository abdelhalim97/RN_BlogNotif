import React,{useState} from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { faCheck,faEye } from '@fortawesome/free-solid-svg-icons'
import {BackGround,BarReset,HeaderCustom} from '../general'
import { LabelInput,ButtonOpacity } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFileSignature } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/core';
import { createUserWithEmailAndPassword, onAuthStateChanged,signOut } from '@firebase/auth'
import {auth} from "../firebase"
const imageGoogle ={uri:"https://img.icons8.com/color/96/000000/google-logo.png"}

export default function Register() {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const navigation=useNavigation();
    const [userFirstTime, setUserFirstTime] = useState({})
    const register = async ()=>{
        try {
        const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
        navigation.navigate("Accueil")
        } catch (error) {
            console.log(error)
        }
    }
    onAuthStateChanged(auth,(currentUser)=>{
        setUserFirstTime(currentUser)
    })
    // const register=()=>{
    //     auth.createUserWithEmailAndPassword(email,password)
    //     .then((authUser) =>{
    //         authUser.user.update({
    //             displayName:name,
    //         // photoURL:imageUrl||"https://img.icons8.com/color/96/000000/google-logo.png"
    //     })}).
    //     catch((error)=>alert(error.message))
    // }
    const btn =[
        {
            id:1,
            name:"Sign Up",
            fnc:register,
        },
    ]
    const data =[
        {
          id:1,
          label:"Email",
          placeH:"Type your Email here",
          icon:faCheck,
          iconS:20,
          pass:false,
          value:registerEmail,
        },
        {
          id:2,
          label:"Password",
          placeH:"Type your pass here",
          icon:faEye,
          iconS:20,
          pass:true,
          value:registerPassword,
        }
      ]
    return (
        <>
            <BackGround></BackGround>
            <View style={{ flex:1,position:"absolute",width:"100%",height:"100%"}}>
                <BarReset></BarReset>
                <HeaderCustom></HeaderCustom>
                <View style={styles.LogIn}>
                    <View style={{ justifyContent:"flex-start",flexDirection:"row" }}>
                        <FontAwesomeIcon icon={faFileSignature} size={25} style={{color:"#3A2298",marginTop:9}}/>
                        <Text style={{ color:"#3A2298",alignItems:"center",paddingLeft:5 }}>Register</Text>
                    </View>
                    <View style={{ marginTop:20 }}>
                    {
                        data.map((d)=>
                        <LabelInput key={d.id} icon={d.icon} placeH={d.placeH} label={d.label}
                        iconS={d.iconS} pass={d.pass} 
                        value={d.value}
                        onChangeText={text => d.id===1?setRegisterEmail(text):setRegisterPassword(text)}>
                        </LabelInput>)
                    }
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
                    <View><Text>{userFirstTime?.email}</Text></View>
                    <ButtonOpacity fnc={()=>signOut(auth)}  name='sign out'></ButtonOpacity>
                </View>
            </View>
            <Text>
            </Text>
        </>
    )
}
const styles = StyleSheet.create({
    LogIn: {
      backgroundColor:"#FFF",
      flex:1,
      marginTop:70,
      paddingLeft:10,
      paddingRight:10,
      borderWidth: 1,
      borderColor:"#FFF",
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
    },
  });