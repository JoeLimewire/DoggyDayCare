
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput,  SafeAreaView, TouchableHighlight, View, Image,ScrollView } from 'react-native';
import styles from '../Styles/globalStyles';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from '../routes/tabs';

//======================================FUNCTIONS======================================//

 function TabScreen({navigation}) {

    const HandlePress = () =>{
        console.log("The text has been clicked");
      }
//======================================VIEW======================================//

  return (
    <Tabs/>
  );
}

//======================================SYTLE SHEETS======================================//

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const localStyles = StyleSheet.create({
  container:{
    backgroundColor:'blue',
    height: 100,
  },
  test:{
    flex:1,
    backgroundColor:'blue',
    width:100,
  },
  scrollFill:{
      height:200,
  },
 });

export default TabScreen;

