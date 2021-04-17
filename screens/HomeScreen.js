import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Bem-Vindo ao seu APP</Text>
        <Button
          title="Go to second screen"
          onPress={()=> navigation.navigate('SecondScreen')
          }
          />
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default HomeScreen;