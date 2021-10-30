import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBlog } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <>
            <View style={{alignItems: 'center'}}>
              <Text style={{ color:"#FFF" }}>Welcome to our Blog</Text>
            </View>
            <View style={{ marginTop:70 }}>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity>
                  <FontAwesomeIcon icon={ faBlog } size={ 32 } style={{ color:"#FFF" }} />
                  {/* our icon ? */}
                </TouchableOpacity>
                <Text style={{ color:"#FFF" }}>Solid Blog</Text>
              </View>
            </View>
        </>
    )
}
