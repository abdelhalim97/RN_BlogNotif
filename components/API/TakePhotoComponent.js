import * as ImagePicker from 'expo-image-picker';
import { FontAwesomeIconOpacity } from '../../components';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { StyleSheet } from 'react-native'

const TakePhotoComponent = (props) => {
   const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
        props.setImageURL(result.uri);
      console.log(result.uri);
    }
  }
  return (
    <FontAwesomeIconOpacity c="#FFF" icon={faCamera} s={32} fnc={takePhoto} style={styles.btt}></FontAwesomeIconOpacity>

  )
}
const styles = StyleSheet.create({
  btt:{
    backgroundColor:"#41928D",padding:10,borderWidth:1,borderColor:"#41928D",borderRadius:25,
      marginHorizontal:7
    },
});
export default TakePhotoComponent
