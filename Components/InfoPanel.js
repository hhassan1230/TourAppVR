import React, { Component } from 'react';
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

export default class InfoPanel extends Component {
	state = {
		img: {
			name: 'info.png',
			width: 100,
			height: 100
		}
	}

	render() {
		let { img } = this.state;

		return(
			<View style={styles.displayPanel}>
					<Image source={asset(`${img.name}`)} style={{width: img.width, height: img.height }}  />	
			</View>
		);
	}
}

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