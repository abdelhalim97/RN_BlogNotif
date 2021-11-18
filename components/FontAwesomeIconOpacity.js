import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function FontAwesomeIconOpacity(props) {
    return (
        <TouchableOpacity onPress={props.fnc} style={ props.style} activeOpacity={0.65}>
            <FontAwesomeIcon  icon={ props.icon } size={ props.s } style={{ color:props.c }} />
                  {/* our icon ? */}
        </TouchableOpacity>
    )
}
