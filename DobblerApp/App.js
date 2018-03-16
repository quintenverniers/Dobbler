import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textValue: ' '
    }
  }

  onPress() {
    var RandomNumber = Math.floor(Math.random() * 6) + 1;
    this.setState({
      number: RandomNumber
    })
  }

  showModal() {
    this.setState({ isModalVisible: true})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.numberOutput}>
          {this.state.number}
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.onPress.bind(this)}>
          <Text style={styles.buttonText}> Roll! </Text>
        </TouchableOpacity>
        <Text>© 2018 Quinten Verniers</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6b7a8f',
  },
  numberOutput: {
    fontSize: 60,
    flexGrow: 1,
    marginTop: 200,
    color: '#f7882f',
  },
  button: {
    alignItems: 'center',
    width: 100,
    marginBottom: 100,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#f7c331',
  },
  buttonText: {
    fontSize: 25,
  }
});
