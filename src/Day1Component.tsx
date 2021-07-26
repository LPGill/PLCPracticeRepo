import React from "react";
import { View, StyleSheet, TouchableOpacity, Button} from "react-native";

export default function Day1Component({navigation}){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Button title="Functional Component" color='white' onPress={() => navigation.navigate('With Hooks')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button title="Class Component" color='white' onPress={() => navigation.navigate('With State')} />
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
    },
    button: { backgroundColor: "black", borderRadius: 5, margin: 20 }
})