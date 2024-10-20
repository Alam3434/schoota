import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps';
import React from 'react'
import { PROVIDER_GOOGLE } from 'react-native-maps';

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <MapView
  style={styles.map}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/>
    </View>
  )
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

export default Profile

