import React from 'react'
import { View, Text,Switch } from 'react-native'

export default function CustomSwitch(props) {
    return (
        <View style={{ flexDirection:"row" }}>
            <Switch  trackColor={{ false:"#E0145C",true:"#4ECD64" }}
            thumbColor={props.check ? "#DBE0E1" : "#DBE0E1"}
            value={props.check} 
            onValueChange={()=>{props.setCheck(!props.check)}} 
            />
            <Text>{props.text}</Text>
        </View>
    )
}
