import React from 'react'
import { ImageBackground, Text } from 'react-native'

export default function BackGround() {
    return (
        <ImageBackground source={image} resizeMode="cover" style={{width: '100%',height:'100%',position:"relative",zIndex:0 }}>
        <Text style={{position:"absolute",backgroundColor: "#3A2298",opacity:0.9,width: '100%',height:'100%'}}></Text>
      </ImageBackground>
    )
}
