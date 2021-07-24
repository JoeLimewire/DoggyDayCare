import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView,Text, TextInput,  SafeAreaView, TouchableHighlight, View, Image } from 'react-native';

import styles from '../Styles/globalStyles';

//======================================FUNCTIONS======================================//

 function AccountScreen({navigation}) {

    const HandlePress = () =>{
        console.log("The text has been clicked");
      }
//======================================VIEW======================================//

  return (
    <SafeAreaView style={{...styles.container, alignItems:'flex-start'}}>
      <ScrollView >
      <Text style={styles.title}>Account Name</Text>
      <Text style={styles.subTitle}> Details </Text>

      <Text style={{...styles.textAlt, color:"#F77F00"}}>First Name: <Text style={styles.text}>Current</Text></Text>
        <Text style={{...styles.textAlt, color:"#F77F00"}}>Last Name: <Text style={styles.text}>Example</Text></Text>
        <Text style={{...styles.textAlt, color:"#F77F00"}}>Email: <Text style={styles.text}>Current.Example@gmail.co.uk</Text></Text>
        <Text style={{...styles.textAlt, color:"#F77F00"}}>Phone Number: <Text style={styles.text}>01234 5678910</Text></Text>

        <TouchableHighlight 
                    onPress={HandlePress}
                    activeOpacity={0.6}
                    underlayColor="#FFF">
                        
                    <View style={styles.button}>
                        <Text style={styles.buttonTitle}>Change My Details</Text>
                    </View>
        </TouchableHighlight>
                
      <View style={styles.containerAlt}>
        <View>
          <Text style={{...styles.subTitle, color: '#FFF'}}>My Pets</Text>
          <Text style={{...styles.subTitle, color: '#FFF'}}>Pet 1</Text>
          <Text style={{...styles.textAlt, color:"#F77F00"}}>First Name: <Text style={styles.textAlt}>Dog</Text></Text>
          <Text style={{...styles.textAlt, color:"#F77F00"}}>Breed: <Text style={styles.textAlt}>Spaniel</Text></Text>
          <Text style={{...styles.textAlt, color:"#F77F00"}}>Size: <Text style={styles.textAlt}>20kg</Text></Text>
          <Text style={{...styles.textAlt, color:"#F77F00"}}>Sterile?: <Text style={styles.textAlt}>False</Text></Text>
          <Text style={{...styles.textAlt, color:"#F77F00"}}>Microchip Number: <Text style={styles.textAlt}>121000000000000</Text></Text>
          <Text style={{...styles.textAlt, color:"#F77F00"}}>Vaccinated?: <Text style={styles.textAlt}>False</Text></Text>
          <Text style={{...styles.textAlt, color:"#F77F00"}}>Behaviour: <Text style={styles.textAlt}>Bla bla bla</Text></Text>
          <TouchableHighlight 
                      onPress={HandlePress}
                      activeOpacity={0.6}
                      underlayColor="#FFF">
                          
                      <View style={styles.button}>
                          <Text style={styles.buttonTitle}>Change Details</Text>
                      </View>
          </TouchableHighlight>
        </View>
        <View styles={styles.container}>
          
        </View>
      </View>
      <View style={styles.scrollFill}/>

      </ScrollView>
      <StatusBar style="auto" />
      
    </SafeAreaView>
  );
}

//======================================SYTLE SHEETS======================================//



export default AccountScreen;