import React, {Component} from 'react';
import {Text,StyleSheet} from 'react-native';
import {RkButton} from 'react-native-ui-kitten';
import App from '../App';


export default class Test extends Component {
  render(){
    return(
      <RkButton onPress={()=>{this.props.navigation.navigate('Home');}}><Text>back</Text></RkButton>
    );
  }
}
