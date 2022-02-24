import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
    );
}
