// import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, StatusBar as RNStatusBar, View, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import _colors from '../assets/_colors'
 
export default function SafeAreaScreen({children, backgroundColor=_colors.dark_umber}) {

    useEffect(()=>{

        RNStatusBar.setBarStyle('light-content')

    },[])


    return (
        <SafeAreaView
            style={[styles.container, {backgroundColor}]}
        >
            
            <KeyboardAvoidingView
                behavior={ 'height'} 
                style={styles.wrapper}
            >
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
    },
    wrapper:{
        alignItems: "center",
        flex: 1,
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 16,
        width: "100%",
    }
})