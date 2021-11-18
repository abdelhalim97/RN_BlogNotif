import React from 'react'
import {  Text,TouchableOpacity } from 'react-native'

export default function CustomTag(props) {
    return (
        <TouchableOpacity onPress={()=>props.fnc()} activeOpacity={props.act?0.65:0.2 }>
            <Text
            style={props.styleP}>{props.title}
            </Text>
        </TouchableOpacity>
    )
}