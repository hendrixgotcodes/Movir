import React from 'react'
import { View, StyleSheet, TouchableOpacity, Share, Platform, Alert } from 'react-native'
import * as IntentLauncher from 'expo-intent-launcher'
import * as Linking from 'expo-linking'

import AppTextBold from '../components/atoms/AppTextBold'
import SafeAreaScreen from './SafeAreaScreen'

import AppIcon from '../assets/img/jsx/AppIcon'
import _colors from '../assets/_colors'
import AppText from '../components/atoms/AppText'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import useLocalization from '../utils/hooks/useLocalization'
 
export default function SettingsScreen() {

    const store = Platform.OS === "ios" ? "apple app store" : "playstore"

    const modalTitle = useLocalization("Screens.Settings.modal.title")
    const modalMessage = useLocalization("Screens.Settings.modal.message")
    const modalAccept = useLocalization("Screens.Settings.modal.accept")
    const modalDecline = useLocalization("Screens.Settings.modal.decline")

    const shareMessageTile = useLocalization("Screens.Settings.shareMessage.title")
    const shareMessageBody = useLocalization("Screens.Settings.shareMessage.message")

    const handleShareOnPress = async ()=>{

        try {
            
            const result = await Share.share({
                message: 
                `Movir. \ ${shareMessageBody}`,
                title: shareMessageTile
            })
            
        } catch (error) {
            
        }


    }

    const handleLanguageOnPress = ()=>{

        Alert.alert(modalTitle, modalMessage,[
            {
                "text": modalAccept,
                "onPress": openSettings
            },{
                "text": modalDecline,
                "onPress": ()=>{}
            }
        ])


    }

    const handleReportOnPress = ()=>{

        try {

            Linking.openURL("https://www.google.com")
            
        } catch (error) {
            
        }

    }

    const openSettings = async()=>{


        try {

            if(Platform.OS === "android"){

                const result = await IntentLauncher.startActivityAsync(IntentLauncher.ACTION_LOCALE_SETTINGS)
                console.log(result);

            }else{

                Linking.openURL("app-settings:General")

            }
            
        } catch (error) {
            
        }

    }

    return (
        <SafeAreaScreen>

                <View
                    style={styles.container}
                >

                    <View
                    >
                        <AppTextBold
                            color={_colors.white}
                            size={30}
                            extraStyle={styles.header}
                        >
                            {useLocalization("Screens.Settings.title")}
                        </AppTextBold>
                    </View>

                    <View
                        style={{
                            flex:1,
                            // justifyContent: "space-between"
                        }}
                    >

                        <View
                            style={[styles.row, styles.section]}
                        >
                            <View
                                style={styles.iconWrapper}
                            >
                                <AppIcon 
                                    width={60}
                                    height={60}
                                />
                            </View>

                            <View
                                style={{
                                    marginLeft: 10
                                }}
                            >
                                <AppText
                                    size={20}
                                    color={_colors.white}
                                >
                                    movir
                                </AppText>
                                <AppText
                                    size={16}
                                    extraStyle={{
                                        textAlign: "left"
                                    }}
                                    color={_colors.nickel}
                                >
                                    v 1.1.0
                                </AppText>
                                
                            </View>

                        </View>

                        <View
                            style={styles.section}
                        >
                            <TouchableOpacity
                                style={[
                                    styles.row, 
                                    {
                                        borderBottomWidth: 0.5, 
                                        borderBottomColor: _colors.nickel,
                                        flexDirection: "row",
                                        width:"100%"
                                    }
                                ]}
                            >
                                <MaterialCommunityIcons 
                                    name="theme-light-dark"
                                    size={18}
                                    color={_colors.nectar}
                                />
                                <AppText
                                    color={_colors.white}
                                    extraStyle={{marginLeft: 10}}
                                >
                                    {useLocalization("Screens.Settings.settings.appTheme")}
                                </AppText>

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.row}
                                onPress={handleLanguageOnPress}
                            >
                                <Ionicons 
                                    name="language"
                                    size={18}
                                    color={_colors.nectar}
                                />
                                <AppText
                                    color={_colors.white}
                                    extraStyle={{marginLeft: 10}}
                                >
                                    {useLocalization("Screens.Settings.settings.language")}
                                </AppText>

                            </TouchableOpacity>
                        </View>

                        <View
                            style={styles.section}
                        >
                            <TouchableOpacity
                                style={[
                                    styles.row, 
                                    {
                                        borderBottomWidth: 0.5, 
                                        borderBottomColor: _colors.nickel,
                                        flexDirection: "row",
                                        width:"100%"
                                    }
                                ]}
                                onPress={handleShareOnPress}
                            >
                                <Ionicons 
                                    name="share"
                                    size={18}
                                    color={_colors.nectar}
                                />
                                <AppText
                                    color={_colors.white}
                                    extraStyle={{marginLeft: 10}}
                                >
                                    {useLocalization("Screens.Settings.settings.tellAFriend")}
                                </AppText>

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.row}
                                onPress={handleReportOnPress}
                            >
                                <MaterialIcons 
                                    name="bug-report"
                                    size={18}
                                    color={_colors.nectar}
                                />
                                <AppText
                                    color={_colors.white}
                                    extraStyle={{marginLeft: 10}}
                                >
                                    {useLocalization("Screens.Settings.settings.reportABug")}
                                </AppText>

                            </TouchableOpacity>
                        </View>

                    </View>



                </View>

        </SafeAreaScreen>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-start",
        width: "100%"
    },
    header:{
        alignSelf: "flex-start",
        marginVertical: 20
    },
    iconWrapper:{
        backgroundColor: _colors.nectar,
        alignSelf: "flex-start",
        // paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    row:{
        flexDirection: "row",
        width:"100%",
        backgroundColor: "rgba(255,255,255, 0.04)",
        padding:15,
        // marginBottom: 10
    },
    section:{
        marginBottom: 50
    }
})