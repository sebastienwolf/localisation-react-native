import React, {useState, useEffect } from 'react';
import MapView, {Marker, Geojson} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

export default function Map() {

  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
     
      setLocation(location);
      console.log(location)
    })
    ();
  }, []);

    const [longitude, setLongitude] = useState(2.33);
    const [latitude, setLatitude] = useState(48.88);
    const myPlace = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [64.165329, 48.844287],
            }
          }
        ]
      };

  return (
    <View style={styles.container}>
        <MapView style={styles.map}
            onPress = { (coordonne) => {
                setLatitude(coordonne.nativeEvent.coordinate.latitude)
                setLongitude(coordonne.nativeEvent.coordinate.longitude)
                
            }}>
            <Geojson
                geojson={myPlace}
                strokeColor="red"
                fillColor="green"
                strokeWidth={2}
                />

            <Marker
            coordinate={{latitude: latitude, longitude: longitude}}
            />
        </MapView>


    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});