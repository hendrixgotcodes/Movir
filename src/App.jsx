import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import _colors from './assets/_colors'
import AppNavigator from './navigation/AppNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SENTRY_DSN} from '@env'

import * as Sentry from 'sentry-expo'


const Stack = createNativeStackNavigator()

export default function App() {


  Sentry.init({
    dsn: SENTRY_DSN,
    enableInExpoDevelopment: true,
    debug: true
  })

  // throw new Error("new error for derrick to understand")

  return (
    <NavigationContainer
      
    >
      <StatusBar 
          // backgroundColor="blue"
          barStyle="light-content"
          translucent={true}
      />
      <AppNavigator />

      {/* <Stack.Navigator>

        <Stack.Screen name="ViewMovie" component={ViewMovieScreen} />

      </Stack.Navigator> */}
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: _colors.dark_umber,
    alignItems: 'center',
    justifyContent: 'center',
  
    // paddingHorizontal: 20,
  },
});
