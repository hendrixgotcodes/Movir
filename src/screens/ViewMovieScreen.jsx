import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ImageBackground, Platform, StatusBar, Pressable, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import _colors from '../assets/_colors'
import { Image } from 'react-native-expo-image-cache'
import SafeAreaScreen from './SafeAreaScreen'
import AppHeader from '../components/molecules/AppHeader'
import AppText from '../components/atoms/AppText'
import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import { fetchMovieDetail } from '../services'

import numeral from 'numeral'
 
export default function ViewMovieScreen({route, navigation}) {

    const [currentMovie, setCurrentMovie] = useState({})
    const movieId = route.params

    useEffect(() => {
        fetchCurrentMovieDetail(movieId)
    }, [])

    const navigateBack = ()=>{

        navigation.goBack()

    }

    const fetchCurrentMovieDetail = async (id)=>{

        const movie = await fetchMovieDetail(id)
        setCurrentMovie(movie)

    }

    return (
        <View style={styles.container}>

            <View
                style={styles.imageWrapper}
            >
                <ImageBackground
                    source={{uri: "https://image.tmdb.org/t/p/original/" + currentMovie.backdrop_path}}
                    style={styles.imageBackground}
                    blurRadius={Platform.OS === "ios" ? 10 : 2}
                >
                    <LinearGradient 
                        style={styles.tint}
                        colors={["rgba(38,39,36,0.3)", "#2D2D2D", "#262724"]}
                        locations={[0.3, 0.5, 1]}
                    >

                        <SafeAreaScreen
                            backgroundColor="transparent"
                        >
                            <View
                                style={styles.contentWrapper}
                            >
                                <Pressable
                                    style={styles.header}
                                    onPress={navigateBack}
                                >
                                    <AppHeader
                                        size={30}
                                        numberOfLines={2}
                                    >
                                        {currentMovie.title}
                                    </AppHeader>
                                </Pressable>

                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                >
                                    <View
                                        style={styles.mainImageWrapper}
                                    >
                                        <Image
                                            uri={"https://image.tmdb.org/t/p/original/" + currentMovie.backdrop_path}
                                            preview={{uri: "https://image.tmdb.org/t/p/original/" + currentMovie.backdrop_path}}
                                            resizeMode="cover"
                                            transitionDuration={0.3}
                                            tint="light"
                                            style={styles.image}
                                            
                                        />
                                    </View>

                                    <View
                                        style={styles.infoView}
                                    >
                                        <AppText 
                                            color={_colors.white} 
                                            size={16}
                                        >
                                            {currentMovie.release_date?.split('-')[0]}
                                        </AppText>

                                        <Octicons 
                                            name="primitive-dot" 
                                            color={_colors.nickel} 
                                        />
                                        
                                        <AppText 
                                            color={_colors.white} 
                                            size={16}
                                        >
                                            {
                                                typeof(currentMovie.genres) === "object" && currentMovie.genres[0].name
                                            }
                                        </AppText>

                                        <Octicons 
                                            name="primitive-dot" 
                                            color={_colors.nickel} 
                                        />

                                        <AppText 
                                            color={_colors.white} 
                                            size={16}
                                        >
                                            {`${currentMovie.runtime} mins`}
                                        </AppText>


                                    </View>

                                    <View
                                        style={styles.ratings}
                                    >
                                        <View
                                            style={{
                                                alignItems: "center",
                                                marginRight: 10
                                            }}
                                        >
                                            <MaterialCommunityIcons 
                                                name="cash-usd-outline" 
                                                size={20} 
                                                color={_colors.nectar} 
                                                style={{marginRight: 10}}
                                            />
                                            <AppText
                                                extraStyle={{textAlign: "left", color:_colors.nickel}}
                                            >
                                                {numeral(currentMovie.revenue).format("0.0a")}
                                            </AppText>
                                        </View>
                                        <View
                                            style={{
                                                alignItems: "center",
                                                marginRight: 10
                                            }}
                                        >
                                            <MaterialCommunityIcons 
                                                name="vote-outline" 
                                                size={20} 
                                                color={_colors.nectar} 
                                                style={{marginRight: 10}}
                                            />
                                            <AppText
                                                extraStyle={{textAlign: "left", color:_colors.nickel}}
                                            >
                                                {numeral(currentMovie.vote_count).format("0a")}
                                            </AppText>
                                        </View>
                                        <View
                                            style={{
                                                alignItems: "center",
                                                marginRight: 10
                                            }}
                                        >
                                            <MaterialCommunityIcons 
                                                name="heart-outline" 
                                                size={20} 
                                                color={_colors.nectar} 
                                                style={{marginRight: 10}}
                                            />
                                            <AppText
                                                extraStyle={{textAlign: "left", color:_colors.nickel}}
                                            >
                                                {currentMovie.vote_average}
                                            </AppText>
                                        </View>
                                    </View>

                                    <AppText
                                        color={_colors.white}
                                    >
                                        {currentMovie.overview}
                                    </AppText>

                                </ScrollView>

                                    
                            </View>
                        </SafeAreaScreen>
                        
                    </LinearGradient>
                </ImageBackground>    
                
            </View>
            
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: _colors.dark_umber
    },
    imageWrapper:{
        width: "100%",
        flex:1
    },
    imageBackground: {
        width: "100%",
        height: "100%"
    },
    tint:{
        width: "100%",
        height: "100%",
        // paddingTop: StatusBar.currentHeight
    },
    mainImageWrapper:{

        width: "100%",
        height: 500,
        backgroundColor: "red",

    },
    image: {
        width: "100%",
        height: "100%"
    },
    header:{
        alignSelf: "flex-start",
        marginBottom:20
    },
    contentWrapper:{
        flex: 1,
        width: "100%",
    },
    infoView:{
        flexDirection: "row",
        width: "70%",
        justifyContent: "space-between",
        alignSelf:"center",
        alignItems: "center",
        paddingVertical: 15
    },
    ratings:{
        flexDirection: "row",
        alignSelf: 'center',
        paddingVertical: 10
    }
})