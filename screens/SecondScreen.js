import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SecondScreen extends Component {
	constructor( ) {
		super();
	}
	
	render(){
		
		return (
		  <View style={styles.container}>
			<Text style={{color: 'white'}}>Bem-Vindo Second Screen</Text>
			<StatusBar style="auto" />
		  </View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
});