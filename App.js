import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, StackNavigator, TabNavigator} from 'react-navigation';
import {ListEpisodes} from './screens/ListEpisodes';
import {MainScreen} from './screens/MainScreen';


export default class App extends Component {
  render() {
    return (
     <RootStack />
    );
  }
}

const RootSrack = createStackNavigator({
  Home : MainSreen,
  Episodes : ListEpisodes
},
{
  initialRouteName: 'Home'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});
