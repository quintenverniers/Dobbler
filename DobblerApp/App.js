import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 'Welcome',
      color: 'white',
    }
  }

  changeOutputStyle(count){	
    colors = ['#ff0000','#f000ff','#00ecff','#89ff00','#fff400']; //lightblue; yellow darkblue lightlightblue purple
    color = colors[count];
    this.setState({
      color: color
    });
  }

  count = 0;

  onPress() {
    this.changeOutputStyle(this.count);
    RandomNumber = Math.floor(Math.random() * 6) + 1;
    this.setState({
      number: RandomNumber,
    })
    if(this.count == colors.length - 1){
      this.count = 0;
    } else {
      this.count++;
    }
    
  }

  showModal() {
    this.setState({ isModalVisible: true})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.numberOutputGeneral, {color: this.state.color}]}>
          {this.state.number}
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.onPress.bind(this)}>
          <Text style={styles.buttonText}> Roll </Text>
        </TouchableOpacity>
        <Text style={{color: '#808080'}}>© 2018 Quinten Verniers</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  numberOutputGeneral: {
    fontSize: 60,
    flexGrow: 1,
    marginTop: 250,
    //color: '#f7882f',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginBottom: 100,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#262626',
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  }
});
