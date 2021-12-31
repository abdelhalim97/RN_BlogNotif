import React, {  useState } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import  FontAwesomeIconOpacity  from './FontAwesomeIconOpacity';
import { db } from '../firebase';
import { deleteDoc,doc} from "firebase/firestore"
import { useEffect } from 'react';

export default function Notifs(props) {
    const [dateNowString, setDateNowString] = useState("")
    useEffect(() => {
        const dateNow=new Date();
        const y =dateNow.getFullYear()
        const mm= dateNow.getMonth()
        const d =dateNow.getDay()
        const h =dateNow.getHours()
        const m =dateNow.getMinutes()
        const dd=y+"/"+mm+"/"+d+" "+h+":"+m
         setDateNowString(dd.toString())
    }, [])
        setInterval(() => {
         const dateNowf=new Date();
        const y =dateNowf.getFullYear()
        const mm= dateNowf.getMonth()
        const d =dateNowf.getDay()
        const h =dateNowf.getHours()
        const m =dateNowf.getMinutes()
        const dd=y+"/"+mm+"/"+d+" "+h+":"+m
         setDateNowString(dd.toString())
        }, 10000);
    const handleDeleteTask = async (id)=>{
        const taskDoc = doc(db,"tasks",id);
        await deleteDoc(taskDoc);
    }
    return (
        <View style={{ flexDirection:"row" }}>
            <View style={{ width:"100%" }}>
                <View style={{ flexDirection:"row",justifyContent:"space-between" }}>
                    <Text>{props.title}</Text>
                    {props.endDate<dateNowString?<FontAwesomeIconOpacity fnc={()=>{handleDeleteTask(props.id)}} 
                    icon={faTrash} style={styles.footerIcon} c="#41928D" s={18}>
                    </FontAwesomeIconOpacity>:<></>}
                </View>
                <Text style={{ fontSize:18 }}>
                {props.paragraph}</Text>  
                <Text style={{ fontSize:13,fontFamily:"normal",fontStyle:"italic" }}>{props.endDate}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        width:50,height:50,margin:5,borderRadius:50
},
footerIcon:{
backgroundColor:"#FFF",borderRadius:25,marginTop:15
}}
);