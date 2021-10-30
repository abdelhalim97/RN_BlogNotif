import React from 'react'
import { ImageBackground, Text } from 'react-native'

export default function BackGround() {
const image ={uri:"https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=385&q=80"}

    return (
        <ImageBackground source={image} resizeMode="cover" style={{width: '100%',height:'100%',position:"relative" }}>
        <Text style={{position:"absolute",backgroundColor: "#3A2298",opacity:0.86,width: '100%',height:'100%'}}></Text>
      </ImageBackground>
    )
}
