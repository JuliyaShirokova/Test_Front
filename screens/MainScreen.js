import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';


export default class MainScreen extends React.Component{
  render() {
    return (
      <View style={styles.container}>
         <Text>Main</Text>
       </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
