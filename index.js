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

export default class TourAppVR extends React.Component {
  render() {
    return (
      <View>

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
