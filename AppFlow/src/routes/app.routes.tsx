import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SplashScreen} from '../screens/SplashScreen';
import {LoginScreen} from '../screens/LoginScreen/index';
import {HomeScreen} from '../screens/HomeScreen';
import {PaymentConfirmationScreen} from '../screens/PaymentConfirmationScreen';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="PaymentConfirmationScreen">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
                name="PaymentConfirmationScreen"
                component={PaymentConfirmationScreen}
            />
        </Stack.Navigator>
    );
}
