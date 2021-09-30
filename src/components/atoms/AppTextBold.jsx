import React, { useEffect } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins'

import _colors from '../../assets/_colors'
 
export default function AppTextBold({color, children, extraStyle=null, size=16,...props}) {
    
    const [isFontLoaded] = useFonts({
        Poppins_700Bold
    })

    color = (color===undefined) ?  _colors.primary : color


    if(!isFontLoaded){
        return (
            <Text 
                style={[
                    {color: color, fontSize: size},
                    styles.text,
                    extraStyle
                ]}
                {...props}
            >
                {children}
            </Text>
        )
    }else{
        return (
            <Text 
                style={[
                    {color: color, fontSize: size},
                    styles.text, 
                    styles.fontFamily,
                    extraStyle
                ]}
                {...props}
            >
                {children}
            </Text>
        )
    }

    
}
 
const styles = StyleSheet.create({
    text: {
        // fontSize: 16
    },
    fontFamily:{
        fontFamily: 'Poppins_700Bold'
    }
})