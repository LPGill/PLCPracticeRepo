import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity,FlatList } from "react-native";
import CheckBox from '@react-native-community/checkbox';

const bookList = [
    { name: 'To Kill a Mockingbird', author: 'Harper Lee', sold: '40 million copies', value: 0 },
    { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', sold: 'almost 30 million copies', value: 1 },
    { name: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', sold: '47 million copies', value: 2 },
    { name: 'A Passage to India', author: 'E.M. Forster', sold: '1 million copies', value: 3 }
]
interface MyState  { 
    selectedBook:myBook
    value:number
};

type myBook = {
    name: String, 
    author: String, 
    sold: String, 
    value: Number
}
export default class ClassComponent extends React.Component<MyState,any> {
    constructor(props:MyState) {
        super(props)
        this.state = {
            value: 0,
            selectedBook: {}
        }
    }

    setRandomNumber = () => {
        const randomNumber1 = Math.floor(Math.random() * 256)
        const randomNumber2 = Math.floor(Math.random() * 256)
        const randomNumber3 = Math.floor(Math.random() * 256)
        this.setState({
            backgroundColor: `'rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})'`
        })
    }

    setValue = (item) => {
        this.setState({
            value: item.value
        })
    }

    setBook=()=>{
        let selectedBook=bookList.find((book)=>book.value==this.state.value)
        this.setState({selectedBook})
    }
    render() {
        const {selectedBook}=this.state
        return (
            <View style={styles.container}>
                <Text style={styles.headingText}>Please select a Novel</Text>
                <FlatList
                    data={bookList}
                    renderItem={({item, i}) => (
                        <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center', maxHeight: 'auto' }}>
                            <CheckBox value={false} onValueChange={()=>this.setValue(item)} />
                            <Text style={{ marginLeft: 5 }}>{item.name}</Text>
                        </View>
                    )}
                />
                <TouchableOpacity style={styles.touchable}>
                    <Button title="Novel Info" onPress={() => this.setBook()} color="white" />
                </TouchableOpacity>
                <Text style={styles.resultTextContainer}>Author of
                    <Text style={styles.resultText}> {selectedBook.name ? selectedBook.name : '-'} </Text>
                    is
                    <Text style={styles.resultText}> {selectedBook.author ? selectedBook.author : '-'} </Text>
                    and sold
                    <Text style={styles.resultText}> {selectedBook.sold ? selectedBook.sold : '-'} </Text>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchable: {
        backgroundColor: "#000",
        borderRadius: 10,
        marginTop: 10
    },
    text: {
        fontWeight: 'bold'
    },
    headingText:{fontSize:16,fontWeight:'bold',margin:5},
    resultTextContainer:{ marginBottom: '100%', margin: 20 },
    resultText:{ fontStyle: 'italic', fontWeight: 'bold' }
})