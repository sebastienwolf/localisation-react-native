import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Map from "../../components/Map";
import TextEntryComponent from "../../components/TextInput";
import React, { useState } from 'react';
import CameraComponent from '../../components/CameraComponent';


export default function Page() {

  const [latitude, setLatitude] = useState("latitude")
  const [longetitude, setLongitude] = useState("longetitude")
  const [adress, setAdress] = useState("adress")

  const [imageUri, setImageUri] = useState(null);

  const handlePictureTaken = (uri) => {
    setImageUri(uri);
  };

  const onChange = ({ latitude, longetitude, adress }) => {
    setLatitude(latitude.toString())
    setLongitude(longetitude.toString())
    setAdress(adress)
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
              <TextEntryComponent value={longetitude} editable={false} />
            </View>
            <TextEntryComponent value={adress} editable={false} />

            {imageUri ? (
              <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
            ) : (
              <CameraComponent onPictureTaken={handlePictureTaken} />
            )}

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