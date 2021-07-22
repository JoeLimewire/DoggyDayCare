import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet,ScrollView, Text, TextInput,  SafeAreaView, TouchableHighlight, View, Image } from 'react-native';


import styles from '../Styles/globalStyles';

//======================================FUNCTIONS======================================//

 function ContactScreen({navigation}) {

  const [descnum, setDnum] = useState(255);

  const changeCharNum = (e) => {
    setDnum(descnum - 1);
    if (e.key === "Backspace"){
      setDnum(descnum + 1);
    };
    if(descnum > 255){
      setDnum(255);
    };
    
  }
 
  const HandlePress = () =>{
      console.log("why is this being called?!");
  }

    
//======================================VIEW======================================//

  return (
    <SafeAreaView style={styles.containerAlt}>
      <ScrollView>
        <View style={styles.containerAlt}>
          <Text style={styles.title}>Contact Us!</Text>
          <Text style={styles.text}>You can email us here, or call us on: </Text>
          <Text style={{...styles.text, color: "#D90429", fontWeight:"bold", fontSize:24}}>01234 567891</Text>
          <Text style={styles.text}>Your Email: </Text>
          <TextInput
          style={styles.input}
          placeholder={"Email"}
          />
          
            <Text style={styles.text}>Description:<Text style={{...styles.text, color: '#D90429', alignSelf:'flex-end', paddingRight:20}}> {descnum}</Text></Text>
            

          
          <TextInput
            style={{...styles.input, width:350, height:200, textAlignVertical: "top"}}
            multiline = {true}
            maxLength = {255}
            onKeyPress= {({nativeEvent}) => changeCharNum(nativeEvent)}
            placeholder={"Please type here..."}
          />
          <TouchableHighlight onPress={() => HandlePress()}
          activeOpacity={0.6}
          underlayColor="#FFF">
          <View style={{...styles.button, width:100}}>
            <Text style={styles.buttonTitle}>Send</Text>
          </View>
          </TouchableHighlight>
        </View>
        <View style={styles.scrollFill}/>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

//======================================SYTLE SHEETS======================================//



export default ContactScreen;