import React, { Component } from "react";
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { StackNavigator } from 'react-navigation';
import TabacadasPT from '../index';


const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column'
  },

  half: {
    height: 100,
    backgroundColor: '#efb445'
  },

  half2: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 80,
    backgroundColor:'#fcf9f2'
  },

  button: {
    height: 40,
    width: 150,
    backgroundColor: "#4884e2",
    borderRadius: 5,
    marginTop: 25,
  },

  buttonLogout: {
    height: 40,
    width: 150,
    backgroundColor: "#f44242",
    borderRadius: 5,
    marginTop: 60,
  },

  logo: {
    position: 'absolute',
    top: 50,
    height: 100,
    width: 100,
    left: Dimensions.get('window').width/2 - 50,
  },

  text: {
    textAlign: 'justify',
    fontWeight: '500',
    marginBottom: 15,
    fontSize: 15,
  },

  textButton: {
    marginTop: 9,
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  }
});

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Personal Area',
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.header}>
        
        <View style={styles.half}>
          
        </View>
       <View style={styles.half2}>
         <Text style={styles.text}>Name: João Filipe</Text>
         <Text style={styles.text}>Orders: 0</Text>
         <Text style={styles.text}>Credit: 0.99€</Text>
         <Text style={styles.text}>Phone: 96*****97</Text>
         <Text style={styles.text}>Address: Rua 25 de Abril, nº5 -  Faro, Portugal</Text>
         <Text style={styles.text}>Email: jo*******@gmail.com</Text>

         <TouchableHighlight style={styles.button}>
           <Text style={styles.textButton}>
              Order
           </Text>
         </TouchableHighlight>

         <TouchableHighlight style={styles.button}>
           <Text style={styles.textButton}>
              Edit Data
           </Text>
         </TouchableHighlight>

         <TouchableHighlight style={styles.buttonLogout} onPress={() => navigate('Login')}>
           <Text style={styles.textButton}>
              Logout
           </Text>
         </TouchableHighlight>
       </View>
        <Image
            style= { styles.logo}
            source={
              require("../img/user.png")
            }
          />
      </View>
    );
  }
}
