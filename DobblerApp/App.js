import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxone}>
           <Text style={styles.text1}>
              Hello motherfucking world!
           </Text>
        </View>
       
        <View style={styles.boxtwo}>
          <Text style={styles.text2}>
            What's up bitchaaassss!
          </Text>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxone: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: 'blue',
  },
  boxtwo: {
    flex: 1,
    backgroundColor: 'blue',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    color: '#ff0000',
  },
});
