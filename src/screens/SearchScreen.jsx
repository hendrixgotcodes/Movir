import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import AppTextBold from '../components/atoms/AppTextBold'
import AppInput from '../components/molecules/AppInput'
import SafeAreaScreen from './SafeAreaScreen'
import LottieView from 'lottie-react-native'
import AppText from '../components/atoms/AppText'
import _colors from '../assets/_colors'
import AppCardList from '../components/molecules/AppCardList'

import * as Services from "../services/index"
import useLocalization from '../utils/hooks/useLocalization'
 
export default function SearchScreen() {

    const [textInput, setTextInput] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [movieList, setMovieList] = useState([])
    const [query, setQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleOnMoviePress = (item)=>{

        navigation.navigate("ViewMovie", item.id)

    }

    const handleOnSearch = async (textInput)=>{

        try {

            setQuery(textInput)
            setIsLoading(true)

            const data = await Services.searchMovies(textInput, currentPage)
            setMovieList(data.results)
            setIsLoading(false)

        } catch (error) {
            console.log(error);
        }

    }

    const paginateMovies = async()=>{

        try {
            const newMovies = await Services.searchMovies(query, currentPage)

            setMovieList([...movieList, ...newMovies.results])
            setCurrentPage(currentPage+1)

        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <SafeAreaScreen>

            <View style={styles.container}>

                <AppTextBold
                    color={_colors.white}
                    size={30}
                    extraStyle={styles.header}
                >
                    {useLocalization("Screens.Search.title")}
                </AppTextBold>

                <AppInput
                    placeholder={useLocalization("Screens.Search.textInput")}
                    onSubmit={handleOnSearch}
                    returnKeyType="done"
                />

                <View
                    style={styles.contentWrapper}
                >

                     
                        {

                            isLoading === true ? (

                                <LottieView
                                    source={require("../assets/animations/loading.json")}
                                    autoPlay={true}
                                    loop={true}
                                    style={{
                                        height: 80,
                                        width: 80,
                                        justifyContent: "center",
                                        alignSelf: "center",
                                    }}
                                />

                            ) : (

                                <>
                                    {
                                        movieList.length > 0 ? (
            
                                            <AppCardList
                                                onMoviePress={handleOnMoviePress}
                                                dataList={movieList}
                                                onEndReached={paginateMovies}
                                            />
            
                                        ) : (
                                            <ListEmptyComponent />
                                        )
                                    }
                                </>

                            )

                        }

                    
                </View>

            </View>

        </SafeAreaScreen>
    )
}

const ListEmptyComponent = ()=>{

    return(

        <>
            <LottieView
                source={require("../assets/animations/search.json")}
                style={{
                    height: 80,
                    width: 80,
                    justifyContent: "center",
                    alignSelf: "center",
                }}
                autoPlay={true}
                loop={true}
            />

            <AppText
                color={_colors.nickel}
            >
                {useLocalization("Screens.Search.listEmptySubtitle")}
            </AppText>

        </>

    )

}
 
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
    },
    header:{
        marginVertical: 20,
        alignSelf: "flex-start"
    },
    contentWrapper:{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        marginTop: 20
    },
    listEmptyComponent:{
        alignSelf: "center"
    }
})