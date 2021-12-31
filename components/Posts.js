import React, { useState } from 'react'
import { View, Text, Image,StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { faTrash,faEdit,faCheckCircle,faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import  FontAwesomeIconOpacity  from './FontAwesomeIconOpacity';
import { db } from '../firebase';
import { doc,deleteDoc, updateDoc} from "firebase/firestore"
import { useDispatch,useSelector } from 'react-redux'

export default function Posts(props) {
    const [newTitle, setNewTitle] = useState("")
    const [newDesc, setNewDesc] = useState("")
    const handleDeletePost = async (id)=>{
        const postDoc = doc(db,"posts",id);
        await deleteDoc(postDoc);
    }
    const handleUpadtePost=async(id,title,desc)=>{
        const collectionRef = doc(db,"posts",id);
        const newFields = {title:title,body:desc};
        await updateDoc(collectionRef,newFields);
        props.setDisplayEdit(null);
    }
    const counter = useSelector(state=>state?.counter)
    
    return (
        <View style={{ flexDirection:"row" }}>
                <TouchableOpacity style={{ width:"20%" }}>
                    <Image source={{ uri:props.img }} style={ styles.image}></Image>
                </TouchableOpacity>
            <View style={{ width:"80%" }}>
                <Text style={{ color:"#FC9466" }}>
                    {props.displayName ?props.displayName : props.email}
                    </Text>
                <View style={{ flexDirection:"row",justifyContent:"space-between" }}>
                    <Text style={{ width:"75%" }}>{props.title}</Text>
                    {props.email===counter?.value?.email &&
                        <View style={{ flexDirection:"row",width:"25%" }}>
                            {props.displayEdit===props.id?
                            <><FontAwesomeIconOpacity
                            disabled={newTitle.trim().length===0 || newDesc.trim().length===0?true:false} 
                            fnc={()=>{handleUpadtePost(props.id,newTitle,newDesc)}} icon={faCheckCircle}
                            style={styles.footerIcon} c="#41928D" s={18}></FontAwesomeIconOpacity>
                            <FontAwesomeIconOpacity fnc={()=>{props.setDisplayEdit(null)}} icon={faTimesCircle}
                            style={styles.footerIcon} c="#41928D" s={18}>
                            </FontAwesomeIconOpacity></>:
                            <><FontAwesomeIconOpacity 
                            fnc={()=>{props.setDisplayEdit(props.id);setNewTitle(props.title)
                                setNewDesc(props.paragraph)}} icon={faEdit}
                            style={styles.footerIcon} c="#41928D" s={18}></FontAwesomeIconOpacity>
                            <FontAwesomeIconOpacity fnc={()=>{handleDeletePost(props.id)}} icon={faTrash}
                            style={styles.footerIcon} c="#41928D" s={18}>
                            </FontAwesomeIconOpacity></>}
                        </View>}
                </View>
                {props.displayEdit===props.id && <TextInput autoFocus defaultValue={props.title}
                onChangeText={text=>setNewTitle(text)} style={{ width:"80%"}}></TextInput>}
                <Text style={{ fontSize:18 }}>{props.paragraph}</Text>
                {props.displayEdit===props.id && <TextInput multiline defaultValue={props.paragraph} 
                onChangeText={text=>setNewDesc(text)}></TextInput>}
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
backgroundColor:"#FFF",borderRadius:25,marginTop:15,marginLeft:10
}}
);