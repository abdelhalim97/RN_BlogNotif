import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

 const ButtonOpacity=(props)=> {
    return (
            // <View>
                <TouchableOpacity
                activeOpacity={0.65}
                onPress={props.fnc}
                style={styles.btt}>
                    <Text style={{ color:"#FFF",padding:6 }}>{props.name}</Text>
                </TouchableOpacity>
            //  </View>               
    )
}
export default ButtonOpacity;
const styles = StyleSheet.create({
    btt:{
        backgroundColor:"#3A2298",
        alignItems:"center",
        elevation:15,
        borderWidth: 1,
        borderColor:"#3A2298",
        borderRadius:28,
        
      },
  });