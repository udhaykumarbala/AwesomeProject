import React, {Component} from 'react';
import {Text,StyleSheet} from 'react-native';
import {RkButton} from 'react-native-ui-kitten';

export default class Test extends Component {
  render(){
    return(
      <RkButton>{this.props.name}</RkButton>
    );
  }
}
