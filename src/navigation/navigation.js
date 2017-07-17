import React from "react";
import { StackNavigator } from 'react-navigation';

const SimpleApp = StackNavigator({
  Login: { screen: TabacadasPT },
  Home: { screen: HomeScreen },
});