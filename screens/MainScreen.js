import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';


export default class MainScreen extends React.Component{
  static navigationOptions = {
    title: 'SUPER FILM',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBlock}>

         <Text style={styles.instractionText}>Для получения списка сериалов, пожалуйста, выберите необходимый месяц и день</Text>
         <Button
          title="Go to episodes"
          onPress={() => this.props.navigation.navigate('Episodes')}
         />
        </View>
        <View style={styles.bottomBlock}>
        </View>
       </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  topBlock: {
    flex: 1,
    width: '70%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  instractionText: {
    textAlign: 'center'
  },
  bottomBlock: {
    flex: 1,
  }
});
