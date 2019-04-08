import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Travel from './navigation/Travel';
import { createStackNavigator, createAppContainer } from "react-navigation";


class App extends React.Component {
  render() {
    return (
      <Travel/>
    );
  }
}


export default createAppContainer(Travel);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
