import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, TextInput,  SafeAreaView, TouchableHighlight, ScrollView, View, Image } from 'react-native';

import styles from '../Styles/global';

 function CreateAccount({naviation}) {
//======================================FUNCTIONS======================================//

    const HandlePress = () =>{
        console.log("The text has been clicked");
      }
    const goToLoginScreen = () =>{
         NavigationPreloadManager.navigate('Login');
    }
//======================================VIEW======================================//
  return (
    <SafeAreaView style={localStyles.container}>
        <ScrollView style={localStyles.scrollView}>
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')}/>

                <Text style={styles.title}>Create Your Account</Text>
            </View>

            <Text style={styles.text}>First Name:</Text>
            <TextInput style={styles.input} placeholder={"First Name"}></TextInput>

            <Text style={styles.text}>Last Name:</Text>
            <TextInput style={styles.input} placeholder={"Last Name"}></TextInput>

            <Text style={styles.text}>Email:</Text>
            <TextInput style={styles.input} placeholder={"E-Mail"} keyboardType={"email-address"}></TextInput>

            <Text style={styles.text}>Password:</Text>
            <TextInput style={styles.input} placeholder={"Password"} secureTextEntry={true}></TextInput>

            <Text style={styles.text}>Address:</Text>
            <TextInput style={styles.input} placeholder={"Address Line 1"}></TextInput>
            <TextInput style={styles.input} placeholder={"Address Line 2"}></TextInput>
            <TextInput style={styles.input} placeholder={"Address Line 3"}></TextInput>

            <View>
                
                <Text style={styles.subTitle}> Pet 1</Text>

                <Text style={styles.text}>Pet Name:</Text>
                <TextInput style={styles.input} placeholder={"Name"}></TextInput>

                <Text style={styles.text}>Breed:</Text>
                <TextInput style={styles.input} placeholder={"Breed"}></TextInput>

                <Text style={styles.text}>Age:</Text>
                <TextInput style={styles.input} placeholder={"Age"} keyboardType={"number-pad"}></TextInput>

            </View>
           
            <View style={styles.container}>
               
                <TouchableHighlight 
                    onPress={HandlePress}
                    activeOpacity={0.6}
                    underlayColor="#FFF">
                        
                    <View style={styles.button}>
                        <Text style={styles.buttonTitle}>Add Pet</Text>
                    </View>
                </TouchableHighlight>

            </View>
            
            

            <View style={localStyles.scrollFill}></View>
            
        </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

//======================================SYTLE SHEETS======================================//

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const localStyles = StyleSheet.create({
 container:{
     
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor:'#FFF',
 },
 scrollView:{
     padding:30,
     width: windowWidth,
 },
 scrollFill:{
     height:200,
 },
});

export default CreateAccount;

