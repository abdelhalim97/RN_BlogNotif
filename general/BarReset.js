import { StyleSheet, StatusBar, View,Platform } from 'react-native';
import React from 'react'

function BarReset() {
    return (<>
        {Platform.OS === 'android'?<View style={styles.reset}></View>:
        <></>
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
