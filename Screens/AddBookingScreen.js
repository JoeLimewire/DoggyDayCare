import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { DateInput } from 'react-native-date-input';
import dayjs from 'dayjs';
import {Picker} from '@react-native-picker/picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { StyleSheet, Text, TextInput,  SafeAreaView, TouchableHighlight, View, Image, ScrollView, Dimensions, Button } from 'react-native';

import styles from '../Styles/globalStyles';

//======================================FUNCTIONS======================================//

 function AddBookingScreen({navigation}) {

  let absDate = new Date();
  absDate = absDate.toLocaleTimeString();

    const HandlePress = () =>{
        console.log("The text has been clicked");
        console.log(absDate);
      }

    const setDropOffDate = (date) =>{
      setDatePickerVisibility(false);
      setDropOffTime(date.toLocaleTimeString());
      console.log(dropOffTime);
    }
    const setPickUpDate = (date) =>{
      setDatePickerVisibility(false);
      setPickUpTime(date.toLocaleTimeString());
      console.log(pickUpTime);
    }
//======================================VIEW======================================//

const [selectedLanguage, setSelectedLanguage] = useState();
const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
const [dropOffTime, setDropOffTime] = useState("Set New Time");
const [pickUpTime, setPickUpTime] = useState("Set New Time");

let dateInput = null;

var defaultDate = new Date();
var dd = String(defaultDate.getDate()).padStart(2, '0');
var mm = String(defaultDate.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = defaultDate.getFullYear();

defaultDate = mm + '/' + dd + '/' + yyyy;

  return (
    <SafeAreaView style={styles.container}>
      {/*  */}
      <ScrollView style={localStyles.scrollView}>
            <View style={styles.container}>
              <Image source={require('../assets/logo.png')}/>
      
              <Text style={styles.title}>Add Booking Screen </Text>
            </View>
 {/* Date */}           
            <Text style={styles.text}>Date:</Text>
            <View style= {styles.input}>
              
              <DateInput
                inputProps={{
                  style: { height:20, color:'black'}
                // Supports all TextInput props
                }}
                dateFormat={'DD/MM/YYYY'}
                defaultValue={defaultDate}
                defaultDate={new Date()}
                minimumDate={new Date(dayjs().subtract(10, 'year'))}
                maximumDate={new Date(dayjs().add(1,"year"))}
                handleChange={HandlePress}
                onRef={(input) => (dateInput = input)}
              />
            </View>           
{/* Location */}   
            <Text style={styles.text}>Location</Text>
            <View style= {styles.input}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
                >
                <Picker.Item label="Johnstone Farms" value="Johnstone Farms" />
                <Picker.Item label="Walkers Place" value="Walkers Place" />
              </Picker>
            </View>
{/* Drop Off Time */}   
            <Text style={styles.text}>Drop Off Time</Text>
            <View style= {styles.input}>
              <Text>{dropOffTime}</Text>
              <TouchableHighlight onPress={() => {setDatePickerVisibility(true); }} 
              style={localStyles.timeButton}>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={setDropOffDate}
                onCancel={() => {setDatePickerVisibility(false);}}
              />
              </TouchableHighlight>
            </View>       
{/* Pick Up Time */}   
            <Text style={styles.text}>Pick Up Time</Text>
            <View style= {styles.input}>
              <Text>{pickUpTime}</Text>
              <TouchableHighlight onPress={() => {setDatePickerVisibility(true); }} 
              style={localStyles.timeButton}>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={setPickUpDate}
                onCancel={() => {setDatePickerVisibility(false);}}
              />
              </TouchableHighlight>
            </View>     
           
            <View style={styles.container}>
              

                <TouchableHighlight 
                    onPress={HandlePress}
                    activeOpacity={0.6}
                    underlayColor="#FFF">
                        
                    <View style={styles.button}>
                        <Text style={styles.buttonTitle}>Create Booking!</Text>
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
 timeButton:{
   height:10,
 }
});

export default AddBookingScreen;