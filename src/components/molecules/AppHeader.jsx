import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import AppTextBold from '../atoms/AppTextBold'
 
export default function AppHeader({children, color="#fff", extraStyle, size=24, ...props}) {
    return (
        <View style={[styles.container, extraStyle]}>
            <Ionicons name="chevron-back" size={size} color={_colors.nectar} />
            <AppTextBold 
                size={size} 
                color={color}
                {...props}
            >
                {children}
            </AppTextBold>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent:"center",
    }
})