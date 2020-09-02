import React from 'react';
import {
  AppRegistry,
  asset,
  Image,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

import InfoPanel from './Components/InfoPanel';

const surfaceModule = NativeModules.surfaceModule;

export default class TourAppVR extends React.Component {
  render() {
    return (
      <View>
        <Image source={asset(`poland.png`)} style={{width: 300, height: 300 }} />
        <View style={styles.attractionBox}>
          <VrButton onClick={() => surfaceModule.start()}>
            <Text style={styles.attractionText}>
              Welcome to Gdansk, Poland! Click Here Dog!
            </Text>
          </VrButton>
        </View>  
      </View>
    );
  }
};

const styles = StyleSheet.create({
  displayPanel: {
    // Fill the entire surface
    width: 100,
    height: 100,
    flexDirection: 'column'
  },
  attractionBox: {
    padding: 20,
    backgroundColor: '#F7F7F7',
    borderColor: '#C4002F',
    borderWidth: 2,
    width: 500
  },
  attractionText: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('TourAppVR', () => TourAppVR);
AppRegistry.registerComponent('InfoPanel', () => InfoPanel);
