import { StyleSheet, Text, View, Image } from "react-native";
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

  const onChange = ({latitude, longetitude, adress})=>{
    setLatitude(latitude.toString())
    setLongitude(longetitude.toString())
    setAdress(adress)
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello tata</Text>
        <Map
        onChange = {onChange}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.row}>
          <TextEntryComponent value={latitude} editable={false} />
          <TextEntryComponent value={longetitude} editable={false}/>
        </View> 
        <TextEntryComponent value={adress} editable={false} />

        {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      ) : (
        <CameraComponent onPictureTaken={handlePictureTaken} />
      )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
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