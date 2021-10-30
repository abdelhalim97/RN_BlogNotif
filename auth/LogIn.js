import React from 'react'
import {  StyleSheet, Text, View,TouchableHighlight, Image  } from 'react-native';
import {BarReset,BackGround,Header} from '../general';
import { faCheck,faEye } from '@fortawesome/free-solid-svg-icons'
import {LabelInput,ButtonOpacity} from '../components/';
import { useNavigation } from '@react-navigation/core';
const imageGoogle ={uri:"https://img.icons8.com/color/96/000000/google-logo.png"}

function LogIn() {
  const btn =[
    {
        id:1,
        name:"LOGIN"
    },
]
const data =[
  {
    id:1,
    label:"Email",
    placeH:"Type your Email here",
    icon:faCheck,
    iconS:20
  },
  {
    id:2,
    label:"Password",
    placeH:"Type your pass here",
    icon:faEye,
    iconS:20
  }
]
const navigation=useNavigation()
    return (
      <>
        <BackGround></BackGround>
        <View style={{ flex:1,position:"absolute",width:"100%",height:"100%" }}>
        <BarReset></BarReset>
            <Header></Header>
            <View style={styles.LogIn}>
              <Text style={{ color:"#3A2298",alignItems:"center" }}>Log In</Text>
              <Text style={{ color:"gray",fontSize:14 }}>You don't have an account yet?
              <TouchableHighlight
              underlayColor="#E3E3E3"
                onPress={()=> {navigation.navigate("Register")}}>
                  <Text style={{ color:"red",fontSize:14 }}> Register now</Text>
                </TouchableHighlight>
              </Text>
              <View style={{ marginTop:20 }}>
                {
                data.map((d)=>
                <LabelInput key={d.id} icon={d.icon} placeH={d.placeH} label={d.label} iconS={d.iconS}>
                </LabelInput>)
                }
                </View>
                <View style={{ justifyContent:"space-around",marginTop:25,flexDirection: "row"}}>
                {
                btn.map((data)=>
                <ButtonOpacity key={data.id} name={data.name}></ButtonOpacity>)
                }
              </View>
              <View style={{ alignItems:"center",marginTop:14 }}>
                <Image source={imageGoogle} style={{height:60,width:60}}/>
              </View>            
            </View>
        </View>
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
export default LogIn
