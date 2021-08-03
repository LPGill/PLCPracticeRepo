import React, { useEffect, useState } from 'react';
import { Alert, Button, Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PanGestureHandler, PinchGestureHandler, State, TapGestureHandler, } from 'react-native-gesture-handler';
import Animated, { event, Value } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';
import { imageState } from '../store/state';
import { imageObj } from '../utils/types';

const { height, width } = Dimensions.get('window');

export default function ImageComponent() {
    const imageStateRecoil: imageObj = useRecoilValue(imageState);
    const [scale, setScale] = useState(1);
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    const onZoomStateChange = _event => {
        console.log('pinching', _event.nativeEvent);
        setScale(_event.nativeEvent.scale)
    }

    const onDrag = _event => {
        console.log('Dragging', _event.nativeEvent);
        if (scale == 1) {
            return
        } else {
            setTranslateX(_event.nativeEvent.translationX);
            setTranslateY(_event.nativeEvent.translationY);
        }
    }

    const setToDefault = _event => {
        console.log('Tapped twice');
        setScale(1)
        setTranslateX(0);
        setTranslateY(0);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: '#000000', opacity: 0.5, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: 'bold', fontFamily: 'Chalkduster' }}>{imageStateRecoil.name}</Text>
            </View>
            <PanGestureHandler onGestureEvent={(event) => onDrag(event)}>
                <PinchGestureHandler onGestureEvent={(event) => onZoomStateChange(event)}>
                    <TapGestureHandler onActivated={(event) => setToDefault(event)} numberOfTaps={2}>
                        <Animated.View style={{ height: '100%', width: width, transform: [{ translateX: translateX }, { translateY: translateY }] }}>
                            <Animated.Image source={imageStateRecoil.image} style={[styles.image, { transform: [{ scale }] }]} resizeMode={'cover'} />
                        </Animated.View>
                    </TapGestureHandler>
                </PinchGestureHandler>
            </PanGestureHandler>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
    },
    image: { height: height, width: width, flex: 1, justifyContent: 'center', alignItems: 'center', transform: [{ scale: 1 }] }
});

