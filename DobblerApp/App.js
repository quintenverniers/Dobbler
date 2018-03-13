import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      textValue:' '
    }
  }

  onPress(){
    var RandomNumber = Math.floor(Math.random() * 6) + 1 ;
    this.setState({
      number: RandomNumber
    })
  }

  render() {
    return (
      <View style={styles.container}>
           <Text style={styles.text1}>
            {this.state.number}
           </Text>
           <Button style={styles.generateButton} onPress={this.onPress.bind(this)}
             title="Roll!"
           />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8cf442',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: 'red',
  },
  generateButton: {
    position: 'absolute',
    bottom:0,
    left:0,
  }
});
