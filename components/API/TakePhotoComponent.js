import * as ImagePicker from 'expo-image-picker';

export const takePhoto = async (props) => {
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
