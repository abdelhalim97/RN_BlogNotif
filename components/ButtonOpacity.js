import React from 'react'
import { Text,TouchableOpacity,StyleSheet } from 'react-native'

 const ButtonOpacity=(props)=> {
    return (
            <TouchableOpacity
            {...props}
            activeOpacity={0.65}
            onPress={props.fnc}
            style={styles.btt}>
                <Text style={{ color:"#FFF",padding:9,fontSize:22 }}>{props.name}</Text>
            </TouchableOpacity>
    )
}
export default ButtonOpacity;
const styles = StyleSheet.create({
    btt:{
        backgroundColor:"#43948E",
        alignItems:"center",
        elevation:15,
        borderWidth: 1,
        borderColor:"#43948E",
        borderRadius:28,
        width:"100%"
      },
  });