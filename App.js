import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RkButton} from 'react-native-ui-kitten';


export default class App extends React.Component {
  render() {
    return (


      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Veera sudhan</Text>
        <RkButton>Click me!</RkButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
