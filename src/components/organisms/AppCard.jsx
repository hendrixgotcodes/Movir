import { Ionicons } from '@expo/vector-icons'
import React, { useState, memo, useEffect } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import _colors from '../../assets/_colors'
import AppText from '../atoms/AppText'
import AppTextBold from '../atoms/AppTextBold'

import {Image} from 'react-native-expo-image-cache'

// import {pure} from 'recompose'
 
function AppCard({favorite=false, toggleFavorite, imgSource, imgThumbNail, title, subTitle, onPress}) {

    const [isFavorite, setIsFavorite] = useState(favorite)


    const _toggleFavorite = ()=>{

        if(isFavorite === true){

            setIsFavorite(false)
            toggleFavorite(isFavorite)

        }else{
            setIsFavorite(true)
            toggleFavorite(isFavorite)
        }

    }

    return (
        <Pressable 
            style={styles.container}
            onPress={onPress}
        >
            
            <View
                style={styles.imageWrapper}
            >
                <Image
                    style={styles.image}
                    uri={imgSource}
                    // source={{uri:imgSource}}
                    preview={{uri: imgThumbNail}}
                    resizeMode="cover"
                    transitionDuration={0.3}
                    // options={{
                    //     headers:{
                    //         a
                    //     }
                    // }}
                    tint="light"
                    
                />
            </View>

            <View
                style={styles.contentWrapper}
            >
                <View
                    style={styles.textWrapper}
                >
                    <AppTextBold 
                        size={25} 
                        color={_colors.white}
                        extraStyle={{alignSelf: "flex-start",}}
                        numberOfLines={1}
                    >
                        {title}
                    </AppTextBold>
                    <View>
                         
                        {
                            subTitle.map((st)=>(
                                <AppText
                                    color={_colors.white}
                                    extraStyle={{alignSelf: "flex-start", }}
                                    key={(cc)=>cc.toString()}
                                >
                                    {subTitle} 
                                </AppText>
                            ))
                        }

                    </View>
                </View>

                <Pressable
                    onPress={_toggleFavorite}
                >
                    {isFavorite === true ? (
                        <Ionicons 
                            name="heart"
                            color={_colors.nectar}
                            size={20}
                            style={{alignSelf: "flex-end"}}
                            />
                    ): (
                        <Ionicons 
                            name="heart-outline"
                            color={_colors.nectar}
                            size={20}
                            style={{alignSelf: "flex-end"}}
                        />
                    )}
                </Pressable>

            </View>

        </Pressable>
    )
}

export default memo(AppCard)
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: _colors.card_bg,
        padding: 10,
        width: "100%",
        height: 500,
    },
    imageWrapper:{
        flex: 1,
        width: "100%",
    
    },
    image:{
        width: "100%",
        flex: 1
    },
    textWrapper: {
    },
    contentWrapper:{
        paddingTop: 5,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    }
})