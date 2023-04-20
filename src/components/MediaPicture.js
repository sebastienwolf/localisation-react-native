import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function MediaPicture({ onPictureTaken }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Permission to access camera roll is required!');
        }
      }
    })();
  }, []);

  const takePicture = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onPictureTaken(result.assets[0]);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AntDesign
        name="addfile"
        color="#121270"
        size={40}
        onPress={() => takePicture()}
      />
    </View>
  );


}

const styles = StyleSheet.create({
  camera: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});