
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput,  SafeAreaView, TouchableHighlight, View, Image } from 'react-native';

import styles from '../Styles/globalStyles';

//======================================FUNCTIONS======================================//

 function LoginScreen({navigation}) {

    const goToCreateAccount = () =>{
        navigation.navigate('CreateAccount');
    }

    const goToHomeScreen = () =>{
        navigation.navigate('Tab');
    }

    const HandlePress = () =>{
        console.log("The text has been clicked");
      }
//======================================VIEW======================================//

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/logo.png')}/>
      
      <Text style={styles.title}>Darla's Day Care </Text>
      <TextInput
        style={styles.input}
        keyboardType={"email-address"}
        placeholder={"E-Mail"}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder={"Password"}
      />

      <TouchableHighlight onPress={goToHomeScreen}
        activeOpacity={0.6}
        underlayColor="#FFF">
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Login</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={goToHomeScreen}
        activeOpacity={0.6}
        underlayColor="#FFF">
        <View style={{...styles.button, backgroundColor: "#D62828", width:300, padding:15}}>
          <Text style={styles.buttonTitle}>Login with Google</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={goToCreateAccount}
        activeOpacity={0.6}
        underlayColor="#FFF">   
          
          <Text style={styles.textHighlight}>Make An Account</Text>
      </TouchableHighlight>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}



//======================================SYTLE SHEETS======================================//



export default LoginScreen;

