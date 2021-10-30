import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { faCheck,faEye } from '@fortawesome/free-solid-svg-icons'
import {BackGround,BarReset,Header} from '../general'
import { LabelInput,ButtonOpacity } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFileSignature } from '@fortawesome/free-solid-svg-icons'

const imageGoogle ={uri:"https://img.icons8.com/color/96/000000/google-logo.png"}

export default function Register() {
    const btn =[
        {
            id:1,
            name:"Sign Up"
        },
    ]
    const data =[
        {
            id:1,
            label:"Full Name",
            placeH:"Type your Name & Family name here",
            icon:faCheck,
            iconS:20
        },
        {
          id:2,
          label:"Email",
          placeH:"Type your Email here",
          icon:faCheck,
          iconS:20
        },
        {
          id:3,
          label:"Password",
          placeH:"Type your pass here",
          icon:faEye,
          iconS:20
        }
      ]
    return (
        <>
            <BackGround></BackGround>
            <View style={{ flex:1,position:"absolute",width:"100%",height:"100%"}}>
                <BarReset></BarReset>
                <Header></Header>
                <View style={styles.LogIn}>
                    <View style={{ justifyContent:"flex-start",flexDirection:"row" }}>
                        <FontAwesomeIcon icon={faFileSignature} size={25} style={{color:"#3A2298",marginTop:9}}/>
                        <Text style={{ color:"#3A2298",alignItems:"center",paddingLeft:5 }}>Register</Text>
                    </View>
                    <View style={{ marginTop:20 }}>
                    {
                        data.map((d)=>
                        <LabelInput key={d.id} icon={d.icon} placeH={d.placeH} label={d.label} iconS={d.iconS}>
                        </LabelInput>)
                    }
                    </View>
                    <View style={{ justifyContent:"space-around",marginTop:25,flexDirection: "row"}}>
                    {
                        btn.map((data)=><ButtonOpacity key={data.id} name={data.name}></ButtonOpacity>)
                    }
                    </View>
                    <View style={{ alignItems:"center",marginTop:14 }}>
                        <Image source={imageGoogle} style={{height:60,width:60}}/>
                    </View> 
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
      borderWidth: 1,
      borderColor:"#FFF",
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
    },
  });