// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navigator from './routes/Stack';

const Stack = createStackNavigator();

function App() {
  return (
    <Navigator/>
  );
}

export default App;