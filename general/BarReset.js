import { StyleSheet, StatusBar, View,SafeAreaView,Platform } from 'react-native';
import React from 'react'

function BarReset() {
    return (<>
        {Platform.OS !== 'ios'?<View style={styles.reset}></View>:
        <SafeAreaView></SafeAreaView>
        }
        </>
    )
}
const styles = StyleSheet.create({
    reset:{
        height:StatusBar.currentHeight
      },
  });
export default BarReset
