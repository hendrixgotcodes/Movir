import React, {forwardRef, useEffect, useRef, useState} from 'react'
import { View, StyleSheet,TouchableOpacity, Animated, useWindowDimensions, Easing, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import {Picker} from '@react-native-picker/picker'
import {RangeSlider} from '@sharcoux/slider'
import _colors from '../assets/_colors'
import {Ionicons} from '@expo/vector-icons'
import SafeAreaScreen from './SafeAreaScreen'
import AppTextBold from '../components/atoms/AppTextBold'
import AppText from '../components/atoms/AppText'
import AppCardList from '../components/molecules/AppCardList'
import AnimatedLottieView from 'lottie-react-native'

import * as Services from "../services/index"
import Storage from '../utils/Storage'
import useOnlineStatus from '../utils/hooks/useOnlineStatus'

import useLocalization from '../utils/hooks/useLocalization'

 
export default function HomeScreen({navigation}) {

    const [currentPage, setCurrentPage] = useState(1)
    const [movieList, setMovieList] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    
    const modalScrollView = useRef()
    const {height} = useWindowDimensions()
    const modalSlideAnim = useRef(new Animated.Value(-height)).current
    const isInternetAvailable = useOnlineStatus()

    useEffect(()=>{

        fetchMovies(currentPage)
        setCurrentPage(currentPage+1)
        

    },[])

    

    const fetchMovies = async (page)=>{

        const movies = await Services.fetchMovies(page)
        setMovieList(movies.results)

    }

    const paginateMovies = async()=>{

        try {
            const newMovies = await Services.fetchMovies(currentPage)

            setMovieList([...movieList, ...newMovies.results])
            setCurrentPage(currentPage+1)
        } catch (error) {
            console.log(error);
        }
        
    }


    const handleOnMoviePress = (item)=>{

        navigation.navigate("ViewMovie", item.id)

    }

    const handleOptionsOnPress = ()=>{

        modalScrollView.current?.scrollTo({
            y:0,
            animated:false
        })

        if(modalVisible === true){
            modalSlideOut()
            setModalVisible(false)
        }else{
            modalSlideIn()
            setModalVisible(true)
        }

    }

    const modalSlideIn = ()=>{

        Animated.timing(modalSlideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
        }).start()

    }

    const modalSlideOut = ()=>{

        Animated.timing(modalSlideAnim, {
            toValue: -height,
            duration: 300,
            useNativeDriver: false,
        }).start()

    }

    return (
        <SafeAreaScreen>

            

            <View
                style={[styles.container,]}
            >

                <View
                    style={{flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center"}}
                >
                    <AppTextBold
                        color={_colors.white}
                        size={30}
                        extraStyle={styles.header}
                    >
                        {useLocalization("Screens.Home.title")}
                    </AppTextBold>

                    <TouchableOpacity
                        onPress={handleOptionsOnPress}
                    >
                        <Ionicons color={_colors.nectar} size={25} name="options-outline"></Ionicons>
                    </TouchableOpacity>

                </View>

                {
                    isInternetAvailable === true ? (
                        <AppCardList
                            onMoviePress={handleOnMoviePress}
                            dataList={movieList}
                            onEndReached={paginateMovies}
                        />
                    ):
                    (
                        <OfflineStatusIllustration />
                    )
                }
                

            </View>

            <Modal
                bottom={modalSlideAnim}
                ref={modalScrollView}
                exit={modalSlideOut}
            />

        </SafeAreaScreen>
    )
}

const Modal = forwardRef(({bottom, exit}, ref)=>{

    const [filters, setFilters] = useState({

        genre: "all",
        year: {
            start: 1990,
            end: 2021
        },
        censorship: "g"

    })

    useEffect(()=>{

        getSavedUserFilters()

    },[])

    const yearSectionLabel = `Year  `


    const genres = [
        {
            label: "All",
            value: "all"
        },
        {
            label: "Adventure",
            value: "adventure"
        },
        {
            label: "Romance",
            value: "romance"
        },
        {
            label: "Sci-Fi",
            value: "sci-Fi"
        },
        {
            label: "Mystery",
            value: "mystery"
        },
        {
            label: "Comedy",
            value: "comedy"
        },
    ]

    const censorship = [
        {
            label: "None",
            value: "none"
        },
        {
            label: "G-General Audiences",
            value: "g"
        },
        {
            label: "PG-Parental Guidance Suggested",
            value: "pg"
        },
        {
            label: "PG-13-Parents Stongly Cautioned",
            value: "pg-13"
        },
        {
            label: "R-Restricted",
            value: "r"
        },
    ]

    const getSavedUserFilters = async ()=>{

        const savedUserFilters = await Storage.getObject("filters")

        if(savedUserFilters !== null) setFilters(savedUserFilters)

    }

    const handleOnYearRangeChanged = ([_startYear, _endYear])=>{


            setFilters({
                ...filters,
                year:{
                    start: _startYear,
                    end: _endYear
                }
            })

    }

    const handleSetFiltersButtonOnPress = ()=>{

        Storage.storeObject("filters", filters)
        exit()

    }

    return(

        <Animated.View
            style={[styles.modal, {bottom}]}
        >
            <ScrollView
                bounces={false}
                ref={ref}
            >

                <AppText
                    extraStyle={{
                        alignSelf:"flex-start",
                        color: _colors.nickel,
                        marginBottom: 15
                    }}
                    size={24}
                >
                    Filters
                </AppText>

                <View
                    style={styles.modalInputWrapper}
                >
                    <AppText
                        color={_colors.nectar}
                        size={20}
                        extraStyle={{alignSelf: "flex-start"}}
                    >
                        Genre
                    </AppText>
                    {/* <ModalTextInput 
                        placeholder="Adventure"
                        placeholderTextColor={_colors.nickel}
                        color={_colors.white}
                    /> */}
                    <Picker
                        selectedValue={filters.genre}
                        onValueChange={(itemValue, itemIndex)=>{

                            setFilters({
                                ...filters,
                                genre: itemValue
                            })

                        }}
                    >
                        {
                            genres.map((genre)=>(
                                <Picker.Item 
                                    label={genre.label}
                                    value={genre.value}
                                    key={genre.value}
                                    color={_colors.white}
                                />
                            ))
                        }
                    </Picker>
                </View>

                <View
                    style={styles.modalInputWrapper}
                >
                    <AppText
                        color={_colors.nectar}
                        size={20}
                        extraStyle={{alignSelf: "flex-start"}}
                    >
                        {yearSectionLabel} 
                        <AppText color={_colors.nickel}>{`(${filters.year.start}`}-</AppText> 
                        <AppText color={_colors.nickel}>{`${filters.year.end})`}</AppText>
                    </AppText>
                    {/* <ModalTextInput
                        placeholder={"2021"}
                        placeholderTextColor={_colors.nickel}
                        color={_colors.white} 
                    /> */}
                    <RangeSlider
                        range={[filters.year.start, filters.year.end]}
                        minimumValue={1990}
                        maximumValue={2021}
                        step={1} 
                        minimumRange={0} 
                        style={{marginVertical: 15}}
                        hitSlop={{
                            top: 20,
                            bottom: 20,

                        }}
                        inboundColor={_colors.nectar}
                        thumbTintColor={_colors.white}
                        onValueChange={handleOnYearRangeChanged}
                    />
                </View>

                <View
                    style={styles.modalInputWrapper}
                >
                    <AppText
                        color={_colors.nectar}
                        size={20}
                        extraStyle={{alignSelf: "flex-start"}}
                    >
                        Censorship
                    </AppText>
                    {/* <ModalTextInput
                        placeholder="Adventure"
                        placeholderTextColor={_colors.nickel}
                        color={_colors.white} 
                    /> */}
                    <Picker
                        // selectedValue={filters.censorship}
                        selectedValue={filters.censorship}
                        onValueChange={(itemValue, itemIndex)=>{
                            // setSelectedCensorship(itemValue)

                            setFilters({
                                ...filters,
                                censorship: itemValue
                            })

                        }}
                    >
                        {
                            censorship.map((censorship)=>(
                                <Picker.Item 
                                    label={censorship.label}
                                    value={censorship.value}
                                    key={censorship.value}
                                    color={_colors.white}
                                />
                            ))
                        }
                    </Picker>
                </View>

                <TouchableOpacity
                    style={styles.modalButton}
                    onPress={handleSetFiltersButtonOnPress}
                >
                    <AppText
                        color={_colors.white}
                        size={20}
                    >
                        Set Filters
                    </AppText>
                </TouchableOpacity>
            </ScrollView>

        </Animated.View>

    )

})

const OfflineStatusIllustration = ()=>{

    

    return(
            <View
                style={{
                    flex:1,
                    justifyContent: "center"
                }}
            >
                <AnimatedLottieView
                    source={require("../assets/animations/no_internet.json")}
                    loop={true}
                    autoPlay={true}
                    style={{
                        height: 100,
                        alignSelf: "center"
                    }}
                />
                <AppText
                    color={_colors.nickel}
                >
                    {`No internet available. \n Movir can't load suggestions now!`}
                </AppText>
            </View>
    )

}

 
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: _colors.dark_umber,
        width: "100%",
        // paddingTop: 20
    },
    header:{
        marginVertical: 20
    },
    modal:{
        position: "absolute",
        // left: -2,
        width: "111%",
        height: Platform.OS === "ios" ? "85%" : "70%",
        backgroundColor: _colors.dark_umber,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        borderWidth: 2,
        borderColor: _colors.nickel,
        borderBottomWidth: 0,
        paddingHorizontal:15,
        paddingVertical: 30,
        justifyContent: "space-between"
    },
    modalInputWrapper:{
        width: "100%",
        marginBottom: 30,
        backgroundColor: "#3A3A3A",
        padding: 10
    },
    modalInput:{
        borderBottomWidth: 1,
        borderBottomColor: _colors.nickel
    },
    modalButton:{
        width: "100%",
        paddingVertical: 10,
        backgroundColor: _colors.nectar
    }
})