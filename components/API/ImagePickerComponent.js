import * as ImagePicker from 'expo-image-picker';
import { FontAwesomeIconOpacity } from '../../components';
import React from 'react'
import { StyleSheet } from 'react-native'
import { faFolder } from '@fortawesome/free-solid-svg-icons';
const ImagePickerComponent = (props) => {
   const   pickImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {return;}
    }
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });    
  if (!result.cancelled) {
    console.log(result.uri)
    props.setImageURL(result.uri);
  }
};

  return (
    <FontAwesomeIconOpacity c="#FFF" icon={faFolder} s={32} fnc={pickImage} style={styles.btt}></FontAwesomeIconOpacity>
  )
}
const styles = StyleSheet.create({
  btt:{
    backgroundColor:"#41928D",padding:10,borderWidth:1,borderColor:"#41928D",borderRadius:25,
      marginHorizontal:7
    },
});
export default ImagePickerComponent

