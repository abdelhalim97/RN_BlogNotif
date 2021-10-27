import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import BarReset from '../app/BarReset';
import tw from 'tailwind-react-native-classnames';

function LogIn() {

    return (
      <>
      <BarReset></BarReset>
        <View style={styles.container}>
            <View style={styles.view}>
              <Text style={tw`text-white`}>Title</Text>
            </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
    },

    view:{
        
    },
    white:{
      color:'white',
    },
  });
export default LogIn
