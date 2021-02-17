import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { 
    NavigationContainer, 
  } from '@react-navigation/native';
  
import SplashScreen from '../components/splashscreen';
import LoginScreen from '../components/loginscreen';
import DashBoard from '../components/dashboard';

const InitialStack = createStackNavigator();

function InitialStackScreen(props) {   
    return(
        <NavigationContainer>
            <InitialStack.Navigator headerMode='none'>
                <InitialStack.Screen name="SplashScreen" component={SplashScreen} />
                <InitialStack.Screen name="LoginScreen" component={LoginScreen} newJWT={props.newJWT}/>            
                <InitialStack.Screen name="DashBoard" component={DashBoard} />
           </InitialStack.Navigator>        
        </NavigationContainer>
        
);
};

export default InitialStackScreen;