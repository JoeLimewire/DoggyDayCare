import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginScreen from '../Screens/LoginScreen';
import CreateAccount from '../Screens/CreateAccountScreen';
import HomeScreen from '../Screens/HomePageScreen';
import AccountScreen from '../Screens/AccountScreen';
import AddBookingScreen from '../Screens/AddBookingScreen';
import ContactScreen from '../Screens/ContactScreen';
import MyBookingsScreen from '../Screens/MyBookingsScreen';
import TabScreen from '../Screens/TabScreen';

const screens={
    Login:{
        screen: LoginScreen
    },
    CreateAccount:{
        screen: CreateAccount
    },
    Home:{
        screen: HomeScreen
    },
    AddBooking:{
        screen: AddBookingScreen
    },
    Contact:{
        screen: ContactScreen
    },
    MyBookings:{
        screen: MyBookingsScreen
    },
    Account:{
        screen: AccountScreen
    },
    Tab:{
        screen: TabScreen
    }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);