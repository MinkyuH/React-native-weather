import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Forecast extends Component{
  render(){
    return(
      <View>
          <Text Style ={styles.bigText}> 
            {this.props.main}
          </Text>
          <Text style = {styles.mainText}> 
            Current conditions: {this.props.description}
          </Text>
          <Text Style ={styles.bigText}> 
            {this.props.temp} F
          </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  mainText:{
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: 'white'
  }
})