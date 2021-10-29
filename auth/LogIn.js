import React from 'react'
import {  StyleSheet,ImageBackground, Text, View,TouchableHighlight, Image, TouchableOpacity  } from 'react-native';
import BarReset from '../app/BarReset';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBlog,faCheck,faEye } from '@fortawesome/free-solid-svg-icons'
import LabelInput from '../components/LabelInput';
import { useNavigation } from '@react-navigation/core';
const imageGoogle ={uri:"https://img.icons8.com/color/96/000000/google-logo.png"}
const image ={uri:"https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=385&q=80"}

function LogIn() {
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
        <ImageBackground source={image} resizeMode="cover" style={{width: '100%',height:'100%',position:"relative" }}>
          <Text style={{position:"absolute",backgroundColor: "#3A2298",opacity:0.9,width: '100%',height:'100%'}}></Text>
        </ImageBackground>
        <View style={{ flex:1,position:"absolute",width:"100%",height:"100%" }}>
        <BarReset></BarReset>
            <View style={{alignItems: 'center'}}>
              <Text style={{ color:"#FFF" }}>Welcome to our Blog</Text>
            </View>
            <View style={{ marginTop:70 }}>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity>
                  <FontAwesomeIcon icon={ faBlog } size={ 32 } style={{ color:"#FFF" }} />
                  {/* our icon ? */}
                </TouchableOpacity>
                <Text style={{ color:"#FFF" }}>Solid Blog</Text>
              </View>
            </View>
            <View style={styles.LogIn}>
              <Text style={{ color:"#3A2298",alignItems:"center" }}>Log In</Text>
              <Text style={{ color:"gray",fontSize:14,marginBottom:20 }}>You don't have an account yet?
              <TouchableHighlight
              underlayColor="#E3E3E3"
                onPress={()=> {navigation.navigate("Register")}}>
                  <Text style={{ color:"red",fontSize:14 }}> Register now</Text>
                </TouchableHighlight>
              </Text>
              {
                data.map((d)=>
                <LabelInput key={d.id} icon={d.icon} placeH={d.placeH} label={d.label} iconS={d.iconS}>
                </LabelInput>)
              }
              <View style={{ alignItems:"center",marginTop:25}}>
                <TouchableOpacity
                onPress={()=> {alert('You tapped the button!')}}
                style={styles.btt}>
                   <Text style={{ color:"#FFF",padding:4 }}>LOGIN</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems:"center",marginTop:23 }}>
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
    btt:{
      backgroundColor:"#3A2298",
      alignItems:"center",
      elevation:15,
      width:"30%",
      borderWidth: 1,
      borderColor:"#3A2298",
      borderBottomLeftRadius:28,
      borderBottomRightRadius:28,
      borderTopLeftRadius:28,
      borderTopRightRadius:28,
    },
  });
export default LogIn
