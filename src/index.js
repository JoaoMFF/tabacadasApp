import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from "react-native";
import { StackNavigator } from 'react-navigation';
import HomeScreen from './homeScreen/homeScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcf9f2"
  },

  button: {
    height: 40,
    width: 150,
    backgroundColor: "#4884e2",
    borderRadius: 5,
  },

  logo: {
    alignItems: 'center',
    alignSelf: 'center',
    height: 200,
    width: 200,
    marginBottom:180,
  },

  text: {
    marginTop: 9,
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  }
});

export default class TabacadasPT extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style= { styles.logo}
          source={
            require("./img/logo.png")
          }
        />
        <TouchableHighlight style={styles.button} onPress={() => navigate('Home')}>
          <Text style={styles.text}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Login: { screen: TabacadasPT },
  Home: { screen: HomeScreen },
});

AppRegistry.registerComponent("TabacadasPT", () => SimpleApp);
