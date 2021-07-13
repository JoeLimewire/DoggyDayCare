import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput,  SafeAreaView, ScrollView, View, Image} from 'react-native';

import styles from '../Styles/globalStyles';

//======================================FUNCTIONS======================================//

 function MyBookingsScreen({navigation}) {

    const HandlePress = () =>{
        console.log("The text has been clicked");
      }
//======================================VIEW======================================//

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={{flex:1}}>
        <View style={{...styles.card, alignItems: 'flex-start'}}>
        <Text style={styles.date}>
              18/6/21
            </Text>
          <View style={styles.announcementTitle}>
            <Text style={styles.cardTitle}>
              Booking
            </Text>
          </View>
          
            <Text style={styles.cardContent}>
              Name: Anna theloveofmylife Kendrick 
            </Text>   
            <Text style={styles.cardContent}>
              Appointment Date: 21/6/21
            </Text> 
            <Text style={styles.cardContent}>
              Location: Johnstone Farms
            </Text> 
            <Text style={styles.cardContent}>
              Time Drop Off: 13:00
            </Text> 
            <Text style={styles.cardContent}>
              Time Pick Up: 17:00
            </Text> 
          
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

//======================================SYTLE SHEETS======================================//



export default MyBookingsScreen;