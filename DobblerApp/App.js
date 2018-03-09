import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      textValue : " "
    }
  }

  onPress(){
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxone}>
           <Text style={styles.text1}>
            {this.state.textValue}
           </Text>
           <Button onPress={this.onPress}
             title="Click Me!"
           />
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
});
