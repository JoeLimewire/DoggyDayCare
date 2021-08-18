import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, TextInput,  SafeAreaView, TouchableHighlight, ScrollView, View, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from '../Styles/globalStyles';

 function CreateAccount({naviation}) {
//======================================FUNCTIONS======================================//      
    let petKey = 1;
    const [petUI, setPetUI] = useState([{key:0, value: ''}]);

    const [value, setValue] = React.useState(["1"+ petUI.key]);

    const [CharNum, setCharNum] = React.useState([255]);

    const goToLoginScreen = () =>{
        NavigationPreloadManager.navigate('Login');
   }
   const HandlePress = () =>{
       console.log("The text has been clicked");
       console.log("Pet UI : " + petUI.key);
     }

     const deleteHandler = (key)=>{
         console.log(key);
        const petUIArray = petUI.filter((petUI,index) => index != key);
        setPetUI(petUIArray);
      }

    const addPetUI = () =>{
        console.log(petUI.key)
        const petUIArray = [...petUI];
        petUIArray.push({key:petUI.key+1,value:''});
        setPetUI(petUIArray);
    };

    const changeCharNum = (e) => {
        setCharNum(CharNum - 1);
        if (e.key === "Backspace"){
            setCharNum(CharNum + 1);
        };
        if(CharNum > 255){
            setCharNum(255);
        };
      }

//======================================VIEW======================================//
  return (
    <SafeAreaView style={localStyles.container}>
        <ScrollView style={localStyles.scrollView}>
            <View style={styles.container}>
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

            <Text style={styles.text}>Phone Number:</Text>
            <TextInput style={styles.input} placeholder={"Address Line 2"}></TextInput>
            <Text style={styles.text}>Address</Text>
            <TextInput style={styles.input} placeholder={"Address Line 1"}></TextInput>
            <TextInput style={styles.input} placeholder={"Address Line 2"}></TextInput>
            <TextInput style={styles.input} placeholder={"Address Line 3"}></TextInput>

            <View >
            {petUI.map((input, key)=>(
                <View key={key} >
                <View style={{backgroundColor: '#003049', borderRadius:5}}>
                <Text style={{...styles.subTitle, color:"#FFF"}}>Pet {key}</Text>
    
                <Text style={styles.textAlt}>Pet Name:</Text>
                <TextInput style={styles.input} placeholder={"Name"}></TextInput>
    
                <Text style={styles.text}>Breed:</Text>
                <TextInput style={styles.input} placeholder={"Breed"}></TextInput>

                <Text style={styles.text}>Sex:</Text>
                <TextInput style={styles.input} placeholder={"Breed"}></TextInput>
                
                <Text style={styles.text}>Picture:</Text>
                <TextInput style={styles.input} placeholder={"Breed"}></TextInput>
                
                <Text style={styles.text}>Size:</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{flexDirection:"row",alignItems:'center'}}>              
                   
                    <RadioButton value={"1" + key}
                        
                        color="#F77F00"
                        />                     
                  
                    <View style={{flex:1}}>
                    <Text >0kg-14.9Kg</Text>
                    </View>

                    <RadioButton value={"2" + key}
                        
                        color="#F77F00"
                        />                    
                    
                    <View style={{flex:1}}>
                    <Text >15kg-24.9Kg</Text>
                    </View>
                    
                </View>
                <View style={{flexDirection:"row",alignItems:'center'}}>              
                   
                    <RadioButton value={"3" + key}
                        
                        color="#F77F00"
                        />                   
                    
                    <View style={{flex:1}}>
                    <Text >25kg-39.5Kg</Text>
                    </View>

                    <RadioButton value={"4" + key}
                        
                        color="#F77F00"
                        />                     
                    
                    <View style={{flex:1}}>
                    <Text >40+kg</Text>
                    </View>
                </View>
                </RadioButton.Group>    
                
                <Text style={styles.text}>Date Of Birth:</Text>
                <TextInput style={styles.input} placeholder={"Breed"}></TextInput>

                <Text style={styles.text}>Are They Sterile?:</Text>
                <TextInput style={styles.input} placeholder={"Breed"}></TextInput>

                <Text style={styles.text}>Are They Vaccinated?:</Text>
                <TextInput style={styles.input} placeholder={"Breed"}></TextInput>
    
                <Text style={styles.text}>Age:</Text>
                <TextInput style={styles.input} placeholder={"Age"} keyboardType={"number-pad"}></TextInput>

                <Text style={styles.text}>Microchip Number:</Text>
                <TextInput style={styles.input} placeholder={"Microchip Number"} keyboardType={"number-pad"}></TextInput>

                <Text style={styles.text}>Behaviour Description :<Text style={{...styles.text, color: '#F77F00', alignSelf:'flex-end', paddingRight:20}}> {CharNum}</Text></Text>
                <TextInput
                    style={{...styles.input, height:200, textAlignVertical: "top"}}
                    multiline = {true}
                    maxLength = {255}
                    onKeyPress= {({nativeEvent}) => changeCharNum(nativeEvent)}
                    placeholder={"Please type here..."}
                />
                
    
                <TouchableHighlight 
                    onPress={() => deleteHandler(key)}
                    activeOpacity={0.6}
                    underlayColor="#FFF">
                    
                <View style={styles.button}>
                    <Text style={styles.buttonTitle}>Remove</Text>
                </View>
    
                </TouchableHighlight>
                </View>
                
                </View>
            ))}

            </View>
           
            <View style={styles.container}>
               
                <TouchableHighlight 
                    onPress={() => setPetUI(addPetUI)}
                    activeOpacity={0.6}
                    underlayColor="#FFF">
                        
                    <View style={styles.button}>
                        <Text style={styles.buttonTitle}>Add Pet</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight 
                    onPress={HandlePress}
                    activeOpacity={0.6}
                    underlayColor="#FFF">
                        
                    <View style={styles.button}>
                        <Text style={styles.buttonTitle}>Create Account!</Text>
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

