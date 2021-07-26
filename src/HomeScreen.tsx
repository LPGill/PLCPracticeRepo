import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({navigation}){
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Button title="Day 1" color='white' onPress={() => navigation.navigate('Day1')}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
  button: { backgroundColor: "black", borderRadius: 5, margin: 20 }
});

