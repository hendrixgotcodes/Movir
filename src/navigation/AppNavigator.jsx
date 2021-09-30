import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import _colors from '../assets/_colors';

import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeNavigation from './HomeNavigator';
import { getFocusedRouteNameFromRoute, useRoute } from '@react-navigation/native';
import SettingsScreen from '../screens/SettingsScreen';


const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
        <Tab.Navigator
            screenOptions={(prop)=>{

                const currentRoute = getFocusedRouteNameFromRoute(prop.route)

                return ({
                    headerShown: false,
                    tabBarStyle: {
                        // alignItems: "center",
                        backgroundColor:"transparent",
                        // height: "8%",
                        // justifyContent: "center",
                        elevation: 0,
                        paddingVertical: Platform.OS === "ios" ? 15 : 0,
                        borderWidth: 0,
                        display: currentRoute === "ViewMovie" ? "none" : "flex",
                        borderTopWidth: 0
                    },
                    tabBarShowLabel:false,
                    tabBarBackground: ()=>(
                        <View 
                            style={styles.tabBarBackgroundStyle}
                        />
                    ),
                    tabBarVisibilityAnimationConfig: {
                        hide:{
                            // animation:
                            config:{
                                duration: 1000,
                                bounciness: true
                            }
                        },
                        show:{
                            config:{
                                duration: 1000,
                                bounciness: true
                            }
                        }
                    },
                    tabBarHideOnKeyboard: true,
                })
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({focused})=>(
                        <TabBarIcon focused={focused} iconName={!focused ? "home-outline": "home"} />
                    )
                }}  
            />

            <Tab.Screen 
                name="Search" 
                component={SearchScreen} 
                options={{
                    tabBarIcon: ({focused})=>(
                        <TabBarIcon focused={focused} iconName={!focused ? "search-outline": "search-circle"} />
                    )
                }} 
            />

            <Tab.Screen 
                name="Favorites" 
                component={FavoritesScreen} 
                options={{
                    tabBarIcon: ({focused})=>(
                        <TabBarIcon focused={focused} iconName={!focused ? "heart-outline": "heart"} />
                    )
                }} 
            />

            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={{
                    tabBarIcon: ({focused})=>(
                        <TabBarIcon focused={focused} iconName={!focused ? "settings-outline": "settings"} />
                    )
                }} 
            />

            

            
        </Tab.Navigator>
  );
}

function TabBarIcon({CustomIcon=null, focused=false, iconName}){

    return(

        <View
            style={[styles.tabBarIcon, focused===true && {backgroundColor: _colors.card_bg}]}
        >
            {
                CustomIcon === null ? (
                    <Ionicons 
                        color={_colors.nectar} 
                        name={iconName} 
                        size={22}
                    />
                ) : (
                    <CustomIcon />
                )
            }
        </View>

    )

}

const styles = StyleSheet.create({

    tabBarIcon:{
        alignItems: "center",
        borderRadius: 30,
        height:40,
        justifyContent: "center",
        width: 40,
    },
    tabBarStyle:{
        // alignItems: "center",
        backgroundColor:"transparent",
        // height: "8%",
        // justifyContent: "center",
        elevation: 0,
        paddingVertical: Platform.OS === "ios" ? 15 : 0,
        borderTopWidth: 0,
        // display: showTabBar() === true ? "flex" : "none"
    },
    tabBarBackgroundStyle:{
        backgroundColor: _colors.eerie_black,
        flexDirection: "row",
        height: "100%",
        width: "100%",
        borderTopWidth: 1,
        borderTopColor: _colors.nickel
    },

})