import React from 'react'
import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'

export default function Posts(props) {

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
                    <Text>{props.title}</Text>
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
});