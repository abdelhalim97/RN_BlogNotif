import React from 'react'
import {  Text, View,TextInput  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

function LabelInput(props) {
    return (
        <View >
            <Text>{props.label}</Text>
            <View style={{flexDirection: 'row'}}>
                <FontAwesomeIcon icon={ props.icon } size={ props.iconS } 
                style={{position:"absolute",left:"92%",color:"purple"}}/>
                <TextInput placeholder={props.placeH} style={{color:"#000",flex:1}}>
                </TextInput>
            </View>
        </View>
    )
}

export default LabelInput
