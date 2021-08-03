import React, { useEffect, useMemo, useState } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity, FlatList, Image, ImageBackground } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { SafeAreaView } from "react-native-safe-area-context";
import { atom, useRecoilState } from "recoil";
import { imageState } from "../store/state";
import { imageList } from "../utils/constants";
import { imageObj } from "../utils/types";


export default function GalleryComponent({ navigation }:any) {

    const [image, setImage] = useRecoilState(imageState);

    const updateState = (imageDetails: any) => {
        let obj: imageObj = { name: imageDetails.imageName, image: imageDetails.imagePath };
        setImage(obj);
        navigation.navigate('Image Screen');
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={imageList}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.imageContainer} onPress={() => updateState(item)}>
                        <ImageBackground source={item.imagePath} style={styles.image}>
                            <View style={{ backgroundColor: 'black', opacity: 0.5, alignItems: 'center', height: 35, justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.imageName}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                )}
                numColumns={2}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    touchable: {
        backgroundColor: "#000",
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        marginTop: '80%',
    },
    text: {
        fontWeight: 'bold',
        color: '#fff'
    },
    box: {
        height: 80,
        width: 80,
        borderRadius: 80
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        // flexBasis: '40%', 
        height: 'auto',
        color: 'white',
        justifyContent: 'center',
        width: 160,
        marginTop: 5
    },
    image: {
        height: 150,
        borderRadius: 10,
        alignSelf: "center",
        width: 150,
        justifyContent: 'flex-end',
    },
})