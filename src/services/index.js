import axios from 'axios'
import * as Localization from 'expo-localization'
import {APP_APIKEY} from '@env'

const apiKey = APP_APIKEY
const url = "https://api.themoviedb.org/3"
const language = Localization.locale.split('-')[0]
const nowPlayingUrl = `${url}/movie/now_playing`
const topRatedUrl = `${url}/movie/top_rated`
const movieUrl = `${url}/movie`
const genreUrl = `${url}/genre/movie/list`
const moviesUrl = `${url}/discover/movie`
const personUrl = `${url}/trending/person/week`

export const fetchMovies = async (page)=>{

    try {

        const {data} = await axios.get(`${url}/movie/now_playing?api_key=${apiKey}&language=${language}&page=${page}`)

        return data

    } catch (error) {
        

        return new Error(error)

    }
    

}


export const fetchGenre = ()=>{



}


export const fetchMovieByGenre = ()=>{



}

export const fetchPerson = ()=>{



}

export const fetchTopRatedMovie = ()=>{



}

export const fetchMovieDetail = async(movieId)=>{

    try {
        
        // const {data} = await axios.get(`${url}/movie/${movieId}?api_key=${apiKey}&language=${language}`)
        const {data} = await axios.get(`${url}/movie/${movieId}?api_key=${apiKey}&language=${language}`)

        return data

    } catch (error) {
        

        return new Error(error)

    }

}

export const fetchMovieVideos = ()=>{



}

export const fetchCasts = ()=>{



}

export const fetchSimilarMovies = ()=>{



}

export const searchMovies = async (query, page)=>{

    try {
        
        const {data} = await axios.get(`${url}/search/movie?api_key=${apiKey}&language=${language}&query=${query}&page=${page}&include_adult=false`)

        console.log(data);

        return data

    } catch (error) {
        

        return new Error(error)

    }

}