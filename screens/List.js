import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({

    flex:{
        flex:1,
    },
    column:{
        flexDirection:'column'
    },
    row:{
        flexDirection:'row'
    }
})


export default class List extends Component {
    static navigationOptions={
        header:(
            <View style={[styles.flex,styles.row]}>
                <View>
                <Text>Search For Place</Text>
                <Text>Destination</Text>
                </View>
                <View>
                <Text>Avatar</Text>
                </View>
            
            </View>
        )
    }

  render() {
    return (
      <View>
        <Text> List </Text>
      </View>
    )
  }
}

