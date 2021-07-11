import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput,  SafeAreaView, TouchableHighlight, View, Image } from 'react-native';

import styles from '../Styles/globalStyles';

//======================================FUNCTIONS======================================//

 function AddBookingScreen({navigation}) {

    const HandlePress = () =>{
        console.log("The text has been clicked");
      }
//======================================VIEW======================================//

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/logo.png')}/>
      
      <Text style={styles.title}>Add Booking Screen </Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

//======================================SYTLE SHEETS======================================//



export default AddBookingScreen;