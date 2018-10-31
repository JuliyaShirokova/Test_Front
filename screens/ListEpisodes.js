import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';


export default class ListEpisodes extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Episodes</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
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
