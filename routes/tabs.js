import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../Styles/globalStyles';

import HomeScreen from '../Screens/HomePageScreen';
import MyBookingsScreen from '../Screens/MyBookingsScreen';
import AccountScreen from '../Screens/AccountScreen';
import AddBookingScreen from '../Screens/AddBookingScreen';
import ContactScreen from '../Screens/ContactScreen';


const Tab = createBottomTabNavigator(); 

const Tabs = () =>{
    return(     
        <Tab.Navigator
        tabBarOptions={{
            keyboardHidesTabBar: true,
            showLabel:false,
            style:{
                position:'absolute',
                bottom:15,
                left:10,
                right:10,
               
                borderRadius:5,
                height:90,
            }
        }}
        
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={localStyles.container}>
                        <Image 
                        source={require("../assets/home.png")}
                        resizeMode="contain"
                        style={{tintColor: focused ? '#D90429' : '#333' }}
                        />
                        <Text style= {{color: focused ? '#D90429' : '#333', ...localStyles.text}} >HOME</Text>
                    </View>
                ),
            }}/>

            <Tab.Screen name="My Bookings" component={MyBookingsScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={localStyles.container}>
                        <Image 
                        source={require("../assets/book.png")}
                        resizeMode="contain"
                        style={{tintColor: focused ? '#D90429' : '#333' }}
                        />
                        <Text style= {{color: focused ? '#D90429' : '#333', ...localStyles.text}} >BOOKINGS</Text>
                    </View>
                ),
            }}
            />

            <Tab.Screen name="Add Bookings" component={AddBookingScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        backgroundColor: focused ? '#D90429' : '#333',
                        borderRadius:90,
                        }}>
                        <Image 
                        source={require("../assets/add.png")}
                        resizeMode="contain"
                        style={{tintColor: '#FFF' }}
                        />
                    </View>
                ),
            }}
            />

            <Tab.Screen name="Contact" component={ContactScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={localStyles.container}>
                        <Image 
                        source={require("../assets/phone.png")}
                        resizeMode="contain"
                        style={{tintColor: focused ? '#D90429' : '#333' }}
                        />
                        <Text style= {{color: focused ? '#D90429' : '#333', ...localStyles.text}} >CONTACT</Text>
                    </View>
                ),
            }}
            />
            <Tab.Screen name="My Account" component={AccountScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={localStyles.container}>
                        <Image 
                        source={require("../assets/user.png")}
                        resizeMode="contain"
                        style={{tintColor: focused ? '#D90429' : '#333', ...localStyles.Image }}
                        />
                        <Text style= {{color: focused ? '#D90429' : '#333', ...localStyles.text}} >ACCOUNT</Text>
                    </View>
                ),
            }}
            />
        </Tab.Navigator>
    );
}

const localStyles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    image:{
        width:15,
        height:15
    },
    text:{
        fontWeight: 'bold',
        fontSize:12,
    },
   });
  

export default Tabs;