import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/home';
import Profile from '../components/profile';
import Paitent from '../components/paitents';
import Appointment from '../components/appointments';
import Notification from '../components/notifications';
import Setting from '../components/settings';
import LogOut from '../components/logout';

const ContextStack = createStackNavigator();


function ContextStackScreen(props) {   
    return(
        <ContextStack.Navigator >
            <ContextStack.Screen name="Home" component={Home} />
            <ContextStack.Screen name="Profile" component={Profile} />
            <ContextStack.Screen name="Paitent" component={Paitent} />
            <ContextStack.Screen name="Appointment" component={Appointment} />
            <ContextStack.Screen name="Notification" component={Notification} />
            <ContextStack.Screen name="Setting" component={Setting} />
            <ContextStack.Screen name="LogOut" component={LogOut} />
        </ContextStack.Navigator>        
    );
};

export default ContextStackScreen;