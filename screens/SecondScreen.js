import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function SecondScreen() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Bem-Vindo Second Screen</Text>
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

export default SecondScreen;