import React,{ useEffect } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const splashPic=require('../assets/SplashScreen.jpg')

export default function SplashScreen({ navigation }:any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Gallery')
    }, 2000)
  }, [])
  const {height, width} = Dimensions.get('window'); 

  return (
    <View style={styles.container}>
      <ImageBackground source={splashPic} style={{height:height,width:width,flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:28,fontWeight:'bold',fontFamily:'Chalkduster',marginTop:80,textTransform:'uppercase'}} numberOfLines={1}>Welcome to gallery</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  button: { backgroundColor: "black", borderRadius: 5, margin: 20 }
});

