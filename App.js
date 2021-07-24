// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';


import Tabs from './routes/tabs';

import Navigator from './routes/Stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <PaperProvider><Navigator/></PaperProvider>
      
    </NavigationContainer>
  );
}

export default App;