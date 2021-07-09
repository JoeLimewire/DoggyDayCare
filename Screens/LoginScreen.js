import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput,  SafeAreaView, TouchableHighlight, View, Image } from 'react-native';

//import Navigator from '../routes/Stack';

//======================================VIEW======================================//


 function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/logo.png')}/>
      
      <Text>Doggy Day Care </Text>
      <TextInput
        style={styles.input}
        placeholder={"E-Mail"}
      />
      <TextInput
        style={styles.input}
        placeholder={"Password"}
      />

      <TouchableHighlight onPress={goToCreateAccount}
        activeOpacity={0.6}
        underlayColor="#FFF">
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Login</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={HandlePress}
        activeOpacity={0.6}
        underlayColor="#FFF">   
          
          <Text style={styles.textHighlight}>Make An Account</Text>
      </TouchableHighlight>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

//======================================FUNCTIONS======================================//
const HandlePress = () =>{
  console.log("The text has been clicked");
}
const goToCreateAccount = () =>{
    //Navigator.screenProps(LoginScreen);
  }


//======================================SYTLE SHEETS======================================//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button:{
    alignItems: "center",
    backgroundColor: "#D90429",
    width:200,
    padding: 10,
    borderWidth: 0,
    borderRadius: 6,
    },
    buttonTitle: {
      color: "#FFF",
      fontSize: 20,
      fontWeight: "bold"
    },
    textHighlight:{
      color: "#D90429",
      margin: 12,
      textDecorationLine: 'underline',
    },
    input: {
      width: 300,
      height: 40,
      margin: 12,
      borderWidth: 1,
      backgroundColor:'#EDF2F4',
      padding:10,
      borderWidth: 0,
      borderRadius: 6,
    },  
});

export default LoginScreen;

