import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";
import Map from "../../components/Map";
import TextEntryComponent from "../../components/TextInput";
import React, { useState } from 'react';
import CameraComponent from '../../components/CameraComponent';
import MyForm from "../../components/Form";
import MediaPicture from "../../components/MediaPicture";


export default function Page() {

  const [latitude, setLatitude] = useState("latitude")
  const [longitude, setLongitude] = useState("longitude")
  const [adress, setAdress] = useState("adress")

  const [imageUri, setImageUri] = useState(null);

  const handlePictureTaken = (image) => {
    setImageUri(image.uri);
    console.log(image.uri);
  };

  const onChange = ({ latitude, longitude, adress }) => {
    setLatitude(latitude)
    setLongitude(longitude)
    setAdress(adress)
    console.log(adress)
  }

  const deletePicture = ()=>{
    setImageUri(null)
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ScrollView>
          <Text style={styles.title}>Formulaire d'incident</Text>
          <View style={styles.map}>
            <Map
              onChange={onChange}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.row}>
              <TextEntryComponent value={latitude} editable={false} style={{ marginLeft: 2, marginRight: 2, }} />
              <TextEntryComponent value={longitude} editable={false} style={{ marginLeft: 2, marginRight: 2, }} />
            </View>
            <View style={styles.row}>
              <TextEntryComponent multiline={true} value={adress} editable={false} />
            </View>
            <View style={styles.row}>
              <CameraComponent onPictureTaken={handlePictureTaken} />
              <MediaPicture onPictureTaken={handlePictureTaken} />
            </View>
            <View style={styles.image}>
              {imageUri ? <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> : null}
              {imageUri ? <Button title="Supprimer une image" onPress={deletePicture} /> : null}
            </View>

            <MyForm
              longitude={longitude}
              latitude={latitude}
              adress={adress}
              image={imageUri}
            />

          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    alignItems: "center",
    padding:20
    
  },
  main: {
    Width: "100%",
    marginHorizontal: "auto",
  },
  map: {
    height: 300,
  },
  title: {
    flexDirection: 'row',
    fontSize: 40,
    width:"100%",
    fontWeight: "bold",
    textAlign: "center"
    
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  row: {
    margin:10,
    Width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    gap:10,
  }

});