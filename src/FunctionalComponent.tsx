import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity, FlatList } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';


export default function FunctionalComponent(){
    const [randomNumber, setRandomNumber] = useState('rgb(255, 255, 255)')
    // const [randomBallColor, setRandomBallColor] = useState('rgb(0, 0, 0)')
    // const offset = useSharedValue(0);
    // const animatedStyles = useAnimatedStyle(() => {
    //     return {
    //         transform: [{ translateY: offset.value * 255 }],
    //     };
    // });
    function setColor() {
        const randomNumber1 = Math.floor(Math.random() * 256)
        const randomNumber2 = Math.floor(Math.random() * 256)
        const randomNumber3 = Math.floor(Math.random() * 256)
        setRandomNumber(`'rgb(${randomNumber1},${randomNumber2},${randomNumber3})`)
        // const randomBallColor1 = Math.floor(Math.random() * 256)
        // const randomBallColor2 = Math.floor(Math.random() * 256)
        // const randomBallColor3 = Math.floor(Math.random() * 256)
        // setRandomBallColor(`'rgb(${randomBallColor1},${randomBallColor2},${randomBallColor3})`)
        // offset.value = withSpring(Math.random())
    }
    return (
        <View style={[styles.container, { backgroundColor: randomNumber }]}>
            {/* <Animated.View style={[styles.box, animatedStyles, { backgroundColor: randomBallColor }]} />
            <Button onPress={() => this.setColor()} title="Press Me" color='black'/> */}
            <TouchableOpacity style={styles.touchable}>
                <Button title="Change Color" onPress={() => setColor()} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchable: {
        backgroundColor: "#000",
        borderRadius: 10,
    },
    text: {
        fontWeight: 'bold'
    },
    box: {
        height: 80,
        width: 80,
        borderRadius: 80
    }
})