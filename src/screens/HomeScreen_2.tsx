import { Button, StyleSheet, View } from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/useMovies'
import Slider from '../components/Slider';

export default function HomeScreen() {
    const { nowPlaying, loading, dataMoviesRequest, setDataMovieRequest } = useMovies();
    return (
        <View>
            <Slider movies={nowPlaying} height={200} width={200}></Slider>
            <Button title={"Avanzar"} onPress={() => {
                if (dataMoviesRequest.page != null) {
                    console.log(`${dataMoviesRequest.page}`);
                    const newDataMoviesRequest = {...dataMoviesRequest, page: ++dataMoviesRequest.page};
                    setDataMovieRequest(newDataMoviesRequest);
                }
            }} />
        </View>
    )
}

const styles = StyleSheet.create({})