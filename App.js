import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, StackNavigator, TabNavigator} from 'react-navigation';
import ListEpisodes from './screens/ListEpisodes';
import MainScreen, {navigationOptions} from './screens/MainScreen';


export default class App extends Component {
  render() {
    return (
     <RootStack />
    );
  }
}

const RootStack = createStackNavigator({
    Home: {screen: MainScreen},
    Episodes: {screen: ListEpisodes},
  },{
      initialRouteName: 'Home',
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#CCCCCC',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'normal',
        },
      },
    });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
