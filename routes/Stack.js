import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginScreen from '../Screens/LoginScreen';

const screens={
    Login:{
        screen: LoginScreen
    }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack)