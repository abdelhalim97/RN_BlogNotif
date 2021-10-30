import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

export default function ButtonOpacity(props) {
    return (
            <View>
                <TouchableOpacity
                onPress={()=> {alert('You tapped the button!')}}
                style={styles.btt}>
                    <Text style={{ color:"#FFF",padding:6 }}>{props.name}</Text>
                </TouchableOpacity>
            </View>               
    )
}
const styles = StyleSheet.create({
    btt:{
        backgroundColor:"#3A2298",
        alignItems:"center",
        elevation:15,
        borderWidth: 1,
        borderColor:"#3A2298",
        borderBottomLeftRadius:28,
        borderBottomRightRadius:28,
        borderTopLeftRadius:28,
        borderTopRightRadius:28,
      },
  });