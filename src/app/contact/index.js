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
  }

  const deletePicture = ()=>{
    setImageUri(null)
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ScrollView>
          <Text style={styles.title}>Hello tata</Text>
          <View style={styles.map}>
            <Map
              onChange={onChange}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.row}>
              <TextEntryComponent value={latitude} editable={false} />
              <TextEntryComponent value={longitude} editable={false} />
            </View>
            <TextEntryComponent value={adress} editable={false} />

            <CameraComponent onPictureTaken={handlePictureTaken} />
            <MediaPicture onPictureTaken={handlePictureTaken}/>
            {imageUri ?  <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> : null}
            <Button title="Supprimer une image" onPress={deletePicture} />

            <MyForm
              longitude = {longitude}
              latitude = {latitude}
              adress = {adress}
              image = {imageUri}
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
  },
  main: {
    Width: "100%",
    marginHorizontal: "auto",
  },
  map: {
    height: 300,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,

  },

});