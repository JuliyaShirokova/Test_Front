import React, {Component} from 'react';
import {Platform, Dimensions} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';
import {ListEpisodes} from './screens/ListEpisodes';
import {MainScreen} from './screens/MainScreen';

let screen = Dimensions.get('Window');

export const Tabs = TabNavigator({
  'MainScreen': {
    screen: MainScreen,
    navigationOptions: {
      tabBarLabel: 'Main',
      tabBarIcon: ({ tintColor }) => <Icon name="calendar" type="entypo" size={28} color={tintColor} />
    },
  },
  'ListEpisodes': {
    screen: ListEpisodes,
    navigationOptions: {
      tabBarLabel: 'Episodes',
      tabBarIcon: ({ tintColor }) => <Icon name="profile" type="ionicon" size={28} color={tintColor} />
    },
  }
});

export const createRootNavigator = () => {
  return StackNavigator(
    {
      Tabs: {
        screen: Tabs,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
  );
};