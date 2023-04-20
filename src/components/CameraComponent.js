import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CameraComponent({ onPictureTaken }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          alert('Permission to access camera roll is required!');
        }
      }
    })();
  }, []);

  const takePicture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      onPictureTaken(result.uri);
    }

  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={takePicture}>
        <Text style={styles.camera}>Prendre une image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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
