import React from 'react'
import { View, Text } from 'react-native'
import {FontAwesomeIconOpacity} from "../components"
import { faBlog } from '@fortawesome/free-solid-svg-icons'

export default function HeaderCustom() {
    return (
        <>
            <View style={{alignItems: 'center'}}>
              <Text style={{ color:"#FFF" }}>Welcome to our Blog</Text>
            </View>
            <View style={{ marginTop:70,alignItems: 'center' }}>
                <FontAwesomeIconOpacity c="#FFF" icon={faBlog} s={32}></FontAwesomeIconOpacity>
                <Text style={{ color:"#FFF" }}>Solid Blog</Text>
            </View>
        </>
    )
}
