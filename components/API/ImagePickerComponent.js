import * as ImagePicker from 'expo-image-picker';

export const   pickImage = async (props) => {
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
    props.setImageURL(result.uri);
  }
};

