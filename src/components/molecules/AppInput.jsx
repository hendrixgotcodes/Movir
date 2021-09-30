import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import _colors from '../../assets/_colors'
import AppTextInput from '../atoms/AppTextInput'
 
export default function AppInput({ CustomIcon=null, extraStyle, placeholder="Fantastic four", onSubmit=null, ...props}) {

    const [textInput, setTextInput] = useState("")

    return (
        <View style={[styles.container, extraStyle]}>

            <AppTextInput
                extraStyles={styles.textInput}
                placeholder={placeholder}
                // height={50}
                width="83%"
                onChangeText={(text)=>{
                    setTextInput(text)
                }}
                // onSubmitEditing={()=>{
                //     console.log(textInput);
                //     setTextInput("")
                //     onSubmit(textInput)
                // }}
                value={textInput}
                {...props}
            />
            <Pressable 
                style={styles.button}
                icon={CustomIcon === null ? (
                    <MaterialCommunityIcons color={_colors.secondary} name="sort-variant" size={18} />
                ): (
                    CustomIcon
                )}
                onPress={()=>{
                    setTextInput("")
                    onSubmit(textInput)
                }}
            >
                <Ionicons 
                    name="search"
                    size={20}
                />
            </Pressable>
            
        </View>
    )
}
 
const styles = StyleSheet.create({
    button:{
        backgroundColor: _colors.nectar,
        borderTopRightRadius: 0,
        height: "100%",
        flex: 0.1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    textInput: {
        flex: 0.9
    }
})