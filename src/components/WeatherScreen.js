import React, { Component } from 'react';
import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Forecast from './Forecast';
import Background from '../imgs/background.jpeg'

const APIKEY = "e0276ae79ecd6d48a5ac7ee8829aa6a4"

export default class WeatherScreen extends Component{

    constructor(props){
        super()
        this.state ={
            zip: '',
            forecast: {
                main: null,
                description: null,
                temp: null
            }
        }
    }

    _handleTextChange(event){
        this.setState({zip: zip})
        fetch('http://api.openweathermap.org/data/2.5/weather?zip='
            + zip + ',KR&units=metric&APPID=' + APIKEY )    
        .then((response) => response.json())
        .then((responseJSON) => {
            this.setState ({
                forecast: {
                    main: responseJSON.weather[0].main,
                    description: responseJSON.weather[0].description,
                    temp: responseJSON.main.temp
                }
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    render(){
        var content = null;
        if (this.state.forecast !== null){
            content =
            <Forecast
                main = {this.state.forecast.main}
                description = {this.state.forecast.description}
                temp = {this.state.forecast.temp}
            />
        }
        return(
            <View style = {styles.container}>
                <Image
                    source = {Background}
                    resizeMode = 'cover'
                    style = {styles.backdrop}/>
                    <View style = {styles.overlay}>
                        <View style = {styles.row}>
                            <Text style = {styles.mainText}>
                                Current Weather for
                            </Text>
                            <View style = {styles.zipContainer}>
                                <TextInput
                                    style = {[styles.zipCode, styles.input]}
                                    returnKeyType = 'go'
                                    onSubmitEditing = {this._handleTextChange}
                                />
                            </View>
                        </View>
                        <Forecast
                            main = {this.state.forecast.main}
                            description = {this.state.forecast.description}
                            temp = {this.state.forecast.temp}
                        />
                    </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4D4D4D'
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