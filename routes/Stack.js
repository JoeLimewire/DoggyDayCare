import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginScreen from '../Screens/LoginScreen';
import CreateAccount from '../Screens/CreateAccountScreen';

const screens={
    Login:{
        screen: LoginScreen
    },
    CreateAccount:{
        screen: CreateAccount
    }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);