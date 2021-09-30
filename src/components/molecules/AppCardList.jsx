import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Text, Image } from 'react-native'
import _colors from '../../assets/_colors'
import AppText from '../atoms/AppText'
import AppTextBold from '../atoms/AppTextBold'
import AppCard from '../organisms/AppCard'

import * as Services from '../../services/index'
 
export default function AppCardList({style, onMoviePress, dataList ,...props}) {

    // const [dataList, setDataList] = useState([])

    // useEffect(() => {
        
    
    //     const fetchMovies = async (page)=>{

    //         const movies = await Services.fetchMovies()
    //         setDataList(movies.results)
    
    //     }

    //     fetchMovies()

    // }, [])

    return (

        <FlatList
            data={dataList}            
            renderItem={({item})=>{

                return(

                    <AppCard 
                        imgSource={"https://image.tmdb.org/t/p/original/" + item.backdrop_path}
                        imgThumbNail={"https://image.tmdb.org/t/p/w300/" + item.backdrop_path}
                        title={item.title}
                        toggleFavorite={()=>{}}
                        subTitle={['scifi romance comedy']}
                        favorite={true}
                        onPress={()=>{
                            onMoviePress(item)
                        }}
                    />
                    
    
                )
            }}
            keyExtractor={(item)=>item.id.toString()}
            ItemSeparatorComponent={()=><View style={{paddingVertical: 10}}/>}
            showsVerticalScrollIndicator={false}
            // ListEmptyComponent={()=>(
            //     <Text>error</Text>
            // )}
            style={{ width: "100%"}}
            {...props}
        />
        
    )
}
