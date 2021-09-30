import React, { useState } from 'react'
import {Text, StyleSheet, TextInput} from 'react-native'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import _colors from '../../assets/_colors'

export default function ModalTextInput({ extraStyles, placeholder, ...props }){

    const [borderColor, setBorderColor] = useState(_colors.primary)
    
    const [isFontLoaded] = useFonts({
        Poppins_400Regular
    })

    const handleOnFocus = ()=>{

        setBorderColor(_colors.complementary)

    }

    const handleOnBlur = ()=>{

        setBorderColor(_colors.primary)

    }

    if(!isFontLoaded){

        return(
            <TextInput
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
                placeholder={placeholder}
                style={[
                    {borderBottomColor: borderColor}, 
                    styles.default, 
                    extraStyles
                ]}
                {...props}
            />
        )

    }else{

        return(
            <TextInput
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
                placeholder={placeholder}
                style={[
                        styles.default, 
                        styles.fontFamily,
                        extraStyles
                ]}
                {...props}
            />
        )

    }

}

const styles = StyleSheet.create({

    default:{
        borderBottomWidth: 1,
        borderColor: _colors.nickel,
        color: _colors.white,
        fontSize: 16,
        padding: 5,
        flexDirection: "row"
    },
    fontFamily:{
        fontFamily: 'Poppins_400Regular'
    },
    secondaryDefault:{

        backgroundColor: _colors.offwhite,
        borderRadius: 15,
        color: _colors.dark_lighter,
        fontSize: 16,
        padding: 10,

    }

})