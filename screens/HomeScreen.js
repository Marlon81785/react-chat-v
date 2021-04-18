import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class HomeScreen extends Component{
	constructor({ navigation }) {
		super();
		this.state = {
			navigation: navigation	
		}
		this.storeData('opa@gmail.com');
		this.getData();
	}
	
	
	storeData = async (value) => {
	  try {
		await AsyncStorage.setItem('@email', value)
	  } catch (e) {
		// saving error
	  }
	}
	
	
	getData = async () => {
	  try {
		const value = await AsyncStorage.getItem('@email')
		if(value !== null) {
		  // value previously stored
			alert(value);
		}
	  } catch(e) {
		// error reading value
	  }
	}

	
	
	
	render(){
		
		return (
		  <View style={styles.container}>
			<Text style={{color: 'black'}}>Bem-Vindo ao seu APP de chat criptografado de ponta a ponta</Text>
			<Button
			  title="Go to second screen"
			  onPress={()=> this.state.navigation.navigate('SecondScreen')
			  }
			  />
			<StatusBar style="auto" />
		  </View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});
