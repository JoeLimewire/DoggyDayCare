
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput,  SafeAreaView, TouchableHighlight, View, Image,ScrollView } from 'react-native';
import styles from '../Styles/globalStyles';
import { Dimensions } from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';



//======================================FUNCTIONS======================================//

 function HomeScreen({navigation}) {

    const HandlePress = () =>{
        console.log("The text has been clicked");
      }
//======================================VIEW======================================//

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={{flex:1, height: windowHeight}}>
        <View style={styles.card}>
        <Text style={styles.date}>
              18/6/21
            </Text>
          <View style={styles.announcementTitle}>
            <Text style={styles.cardTitle}>
              Announcement
            </Text>
          </View>
          
            <Text style={styles.cardContent}>
            In this episode, you will learn more about Ouroboros Farms, an aquaponics farm in the Bay Area that has been growing vegetables and fish for the past 7 years.  You will learn about some of their successes and failures as well as how they have designed their farm to educate people about aquaponics, but also produce a viable business model on how to generate cash flow from many different aspects of the farm besides just selling the vegetables and fish, which is what most farms do.
            </Text>    
            <Image source={require('../assets/test.jpg')} style={styles.cardImage}/>
        </View>

        <View style={styles.card}>
          <View style={styles.announcementTitle}>
            <Text style={styles.cardTitle}>
              Another Announcement
            </Text>
          </View>
            <Text style={styles.cardContent}>
              This is some  more content
            </Text>
          <Image source={require('../assets/beach.jpg')} style={styles.cardImage}/>

        </View>
        <View style={styles.scrollFill}></View>
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
    backgroundColor:'blue',
    
  },

  
  
  
 });

export default HomeScreen;

