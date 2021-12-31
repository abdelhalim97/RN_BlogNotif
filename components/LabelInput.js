import React from 'react'
import {  Text, View,TextInput  } from 'react-native';

function LabelInput(props) {

    return (
        <View>
            <Text>{props.label}</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput  style={{color:"#000",width:"100%"}}
                maxLength={300} secureTextEntry={props.pass}
                {...props}>
                </TextInput>
            </View>
        </View>
    )
}

export default LabelInput
