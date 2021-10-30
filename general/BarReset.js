import { Platform,StyleSheet, StatusBar, View,SafeAreaView } from 'react-native';
import React from 'react'

function BarReset() {
    return (
        // <>
        //     {Platform.OS === 'ios' && <SafeAreaView></SafeAreaView>}
        //     {Platform.OS === 'android' && <View style={styles.reset}></View>}
        // </>
        <View style={styles.reset}></View>
    )
}
const styles = StyleSheet.create({
    reset:{
        height:StatusBar.currentHeight
      },
  });
export default BarReset
