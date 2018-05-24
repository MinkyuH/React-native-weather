import React, { Component } from 'react';
import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class WeatherScreen extends Component{
    getInitialState(){
        return({
            address: '',
            forecast:{
                main: 'Clouds',
                description: 'few Clouds',
                temp: 45.7
            }
        })
    }

    _handleTextChange(event){
        this.setstate({
            address: event.nativeEvent.text
        })
    }

    render(){
        return(
            <View style = {styles.container}>
                <Text style ={styles.welcome}> Your input {this.state.address} </Text>
                <Textinput
                    style = {styles.input}
                    onSubmitEditing = {this._handleTextChange}
                />
            </View>
        )
    }



}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    input:{
        fontSize: 20,
        borderWidth: 2,
        height: 40
    }
})