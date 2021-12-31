import React from 'react'
import { View, Text, Image,StyleSheet } from 'react-native'
import { BarReset,BackGround } from '../general'
import { useDispatch,useSelector } from 'react-redux'
import {setUserRedux} from "../slices/CounterSlices"
import { FontAwesomeIconOpacity } from '../components'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { auth } from '../firebase'
import { signOut } from '@firebase/auth'
import { useNavigation } from '@react-navigation/core';

export default function Profil() {
    const navigation=useNavigation();
    const dispatch = useDispatch()
    const counter = useSelector(state=>state?.counter)
    const logout=async ()=>{
        await signOut(auth)
        dispatch(setUserRedux(
            null
        ))
        navigation.navigate("LogIn");
    }
    const name= counter?.value?.displayName
    const email = counter?.value?.email
    return (
        <>
            <BackGround></BackGround>
            <View style={styles.constainer}>
                <BarReset></BarReset>
                <View style={{ backgroundColor:"#FFF",width:"100%",alignItems:"center",paddingHorizontal:15 }}>
                    <Image source={{ uri:counter?.value?.image }} resizeMode="cover" style={styles.img}></Image>
                    {/* {textArray.map((data)=>
                        <LabelInput key={data.id} label={data.label} icon={data.icon} 
                        iconS={20} pass={false} placeH={data.placeH} value={data.value}
                        onChangeText={text => data.id===1?setName(text):
                            data.id===2?setEmail(text):setPass(text)}
                        ></LabelInput>
                    )} */}
                    {name&&<Text>{name}</Text>}
                    {email&&<Text>{email}</Text>}
                    <View style={{ alignItems:"flex-end",width:"100%",marginBottom:17 }}>
                        <FontAwesomeIconOpacity s={32} fnc={()=>{logout()}} icon={faSignOutAlt}
                        style={styles.footerIcon} c="#5c1573"></FontAwesomeIconOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    constainer:{
        flex:1,position:"absolute",width:"100%",height:"100%"
    },
    img: {
        height:100,width:100,borderWidth:1,borderColor:"#FFF",borderRadius:50,marginTop:20
    },
    footerIcon:{
        backgroundColor:"#FFF",padding:8,borderWidth:1,borderColor:"#E2D5CC",borderRadius:25,
        marginHorizontal:7
    },
  });