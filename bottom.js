import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Bottom = () => {
    const tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <tab.Navigator>
                <tab.Screen name='Contact' component={Contact}/>
                <tab.Screen name='FAQ' component={FAQ}/>
                <tab.Screen name='Security' component={Security}/>
            </tab.Navigator>
        </NavigationContainer>
    )
}


const Contact = () => {
    return (
        <View>

        </View>
    )
}



const FAQ = () => {
    return (
        <View>
            <Text>
                FAQ
            </Text>
        </View>
    )
}



const Security = () => {
    return (
        <View>
            <Text>
                Security
            </Text>
        </View>
    )
}
export default Bottom
