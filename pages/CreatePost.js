import React, { useState } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { LabelInput, ButtonOpacity,CustomSwitch } from '../components';
import { BackGround, BarReset } from '../general'
import { useNavigation } from '@react-navigation/core';
import { collection,addDoc} from "firebase/firestore"
import { db } from '../firebase'
import { useSelector } from 'react-redux'

export default function CreatePost() {
    const [check, setCheck] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)
    const [tags, setTags] = useState([])
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const postCollectionRef = collection(db,"posts")
    const navigation=useNavigation();
    const handleRedirectionAccueil=()=>{
        navigation.navigate("Accueil")
    }
    const counter = useSelector(state=>state?.counter)
    const createPost=async()=>{
        await addDoc(postCollectionRef,{
            title:title,
            body:body,
            email:counter.value.email,
            displayName:counter?.value?.displayName,
            tags:tags,
            img:counter?.value?.image,
        })
    }
    const label=[
        {
            id:1,
            label:"Post Title",
            pass:false,
            value:title,
        },
        {
            id:2,
            label:"Post Body",
            pass:false,
            value:body,
        },
    ]
    const switchData=[
        {
            id:1,
            check:check,
            setCheck:setCheck,
            text:"Front-End",
            related:["HTML","CSS","Tailwind"],
        },
        {
            id:2,
            check:check2,
            setCheck:setCheck2,
            text:"Back-End",
            related:["PHP","NODE.js","Flusk"],
        },
        {
            id:3,
            check:check3,
            setCheck:setCheck3,
            text:"UI/UX",
            related:["Illustrator","Adobe xd","Photoshop"],
        },
        {
            id:4,
            check:check4,
            setCheck:setCheck4,
            text:"Data Science",
            related:["Methodology","Data Analytics","python"],
        },
    ]
    const handleTags=()=>{
        if(check){tags.push("Front-End")}
        if(check2){tags.push("Back-End")}
        if(check3){tags.push("UI/UX")}
        if(check4){tags.push("Data Science")}
    }
    return (
        <>
            <BackGround></BackGround>
            <View style={styles.container}>
                <BarReset></BarReset>
                <View style={{ paddingHorizontal:"25%",backgroundColor:"#FFF" }}>
                    <View style={styles.header}>
                        <Text style={{ color:"#585859",textAlign:"center" }}>Create New Post</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    {
                        label.map((data)=>
                        <LabelInput key={data.id} label={data.label} pass={data.pass} 
                        value={data.value} id={data.id}
                        onChangeText={text=>data.id===1?setTitle(text):setBody(text)} 
                        ></LabelInput>)
                    }
                    {switchData.map((data)=>
                    <CustomSwitch key={data.id} text={data.text} setCheck={data.setCheck} 
                    check={data.check}></CustomSwitch>
                    )}
                    <View style={{ justifyContent:"space-around",marginVertical:25,flexDirection: "row"}}>
                        <ButtonOpacity fnc={()=>{handleTags();createPost();handleRedirectionAccueil()}}  name="Create Post"
                        disabled={title.trim().length>0 && body.trim().length>0? false:true}
                        >
                            </ButtonOpacity>                        
                    </View> 
                </View>
            </View>            
        </>
    )
}
const styles = StyleSheet.create({
    container: {flex:1,position:"absolute",width:"100%",height:"100%",},
    header:{backgroundColor:"#FFF",borderBottomWidth:1,borderColor:"#5c1573"},
    view:{backgroundColor:"#FFF",paddingHorizontal:15,paddingTop:"40%"},
    btn:{backgroundColor:"#FFF"}
  });