import React from 'react'
import {  Text,TouchableOpacity } from 'react-native'

export default function CustomTag(props) {
    return (
        <TouchableOpacity onPress={()=>props.fnc()} activeOpacity={0.75 }>
            <Text
            style={props.styleP}>{props.title}
            </Text>
        </TouchableOpacity>
    )
}