import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import ViewMovieScreen from '../screens/ViewMovieScreen'
import MovieSettingsScreen from '../screens/MovieSettingsScreen'

const Stack = createNativeStackNavigator()
 
export default function HomeNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen name="Movies" component={HomeScreen} />
            <Stack.Screen 
                name="ViewMovie" 
                component={ViewMovieScreen}
            />

        </Stack.Navigator>
    )
}
 
const styles = StyleSheet.create({
    container: {
 
    }
})