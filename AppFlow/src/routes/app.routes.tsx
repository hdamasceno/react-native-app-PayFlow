import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SplashScreen} from '../screens/SplashScreen';
import {LoginScreen} from '../screens/LoginScreen/index';
import {HomeScreen} from '../screens/HomeScreen';
import {PaymentConfirmationScreen} from '../screens/PaymentConfirmationScreen';
import {ExtractScreen} from '../screens/ExtractScreen';
import {BillFormScreen} from '../screens/BillFormScreen';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="BillForm">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
                name="PaymentConfirmationScreen"
                component={PaymentConfirmationScreen}
            />
            <Stack.Screen name="Extract" component={ExtractScreen} />
            <Stack.Screen name="BillForm" component={BillFormScreen} />
        </Stack.Navigator>
    );
}
