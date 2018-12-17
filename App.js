import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './components/HomeScreen';
import Test from './components/Test';
// import Shoutem from './components/Shoutem';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: Test,
    // Shoutem:Shoutem,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {

    return<AppContainer />
  }
}
