import React, { useState } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { LabelInput,CheckTag, ButtonOpacity } from '../components';
import { BackGround, BarReset } from '../general'
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/core';

export default function CreatePost() {
    const navigation=useNavigation();
    const handleRedirectionAccueil=()=>{
        navigation.navigate("Accueil")
    }
    const label=[
        {
            label:"Post Title",
            placeH:"Type your Title here",
            icon:faClipboard,
            iconS:20,
            pass:false,
        },
        {
            label:"Post Body",
            placeH:"Type your Topic Body here",
            icon:faClipboard,
            iconS:20,
            pass:false,
        },
    ]
    const tx=[
        {
            id:1,
            title:"Front-end",
            // fnc:handleCustomTag(1),
            // styleP:styles.scrollElements,
            // styleActive:styles.styleActive,
            related:["HTML","CSS","Tailwind"],
        },
        {
            id:2,
            title:"Back-end",
            // fnc:handleCustomTag(2),
//             styleP:styles.scrollElements,
            // styleActive:styles.styleActive,
            related:["PHP","NODE.js","Flusk"],
        },
        {
            id:3,
            title:"UI/UX",
            // fnc:handleCustomTag(3),
            // styleP:styles.scrollElements,
            // styleActive:styles.styleActive,
            related:["Illustrator","Adobe xd","Photoshop"],
        },
        {
            id:4,
            title:"Data Science",
            // fnc:handleCustomTag(4),
            // styleP:styles.scrollElements,
            // styleActive:styles.styleActive,
            related:["Methodology","Data Analytics","python"],
        },
    ]
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
                        <LabelInput key={data.id} icon={data.icon} iconS={data.iconS}
                        label={data.label} placeH={data.placeH} pass={data.pass}></LabelInput>)
                    }
                    {tx.map((data)=><CheckTag key={data.id} id={data.id} label={data.title}
                    ar={data.related}
                    ></CheckTag>)}
                    <View style={{ justifyContent:"space-around",marginVertical:25,flexDirection: "row"}}>
                        <ButtonOpacity fnc={handleRedirectionAccueil} name="Create Post"
                        ></ButtonOpacity>                        
                    </View> 
                </View>
            </View>            
        </>
    )
}
const styles = StyleSheet.create({
    container: {flex:1,position:"absolute",width:"100%",height:"100%",},
    header:{backgroundColor:"#FFF",borderBottomWidth:1,borderColor:"#5c1573"},
    view:{backgroundColor:"#FFF",paddingHorizontal:15},
    btn:{backgroundColor:"#FFF"}
  });