import React from 'react'
import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'
import { faTrashAlt,faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIconOpacity } from '../components'

export default function Posts(props) {
    return (
        <View style={{ flexDirection:"row" }}>
            <TouchableOpacity style={{ width:"20%" }}>
                <Image source={props.img} style={ styles.image}></Image>
            </TouchableOpacity>
            <View style={{ width:"80%" }}>
                <Text style={{ color:"#b48f77",textDecorationLine:"underline" }}>{props.fullName}</Text>
                <View style={{ flexDirection:"row",justifyContent:"space-between" }}>
                    <Text>{props.title}</Text>
                    <View style={{ flexDirection:"row" }}>
                        <FontAwesomeIconOpacity c="#5c1573" icon={faPenSquare} s={17} 
                        style={{ marginTop:10 }}>
                        </FontAwesomeIconOpacity>
                        <FontAwesomeIconOpacity c="#5c1573" icon={faTrashAlt} s={17} 
                        style={{ marginTop:10 }}>
                        </FontAwesomeIconOpacity>
                    </View>
                </View>
                <Text style={{ fontSize:20 }}>
                <Text style={{ fontSize:13,fontFamily:"normal",fontStyle:"italic" }}>09/09/1997 - </Text>
                {props.paragraph}</Text>                    
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        width:50,height:50,borderWidth:3,borderColor:"#E2D5CC",borderRadius:10,
        transform: [{ rotateX: "0deg" },{ rotateZ: "20deg" }],margin:5,
},
});