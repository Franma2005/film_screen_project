import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Movie } from '../config/entities/Movie'

interface Movies {
  movies: Movie[];
  height: number;
  width: number;
}

export default function Slider({ movies, height, width }: Movies) {
  return (
    <View>
      <ScrollView style = {{height: height, width: width}} horizontal={true}>
        {movies.map((item, index) => (
          <Image style = {[styles.imagen, {height: height, width: width}]} key = {index}
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster}`,
            }}
          />
        ))}
      </ScrollView>
      <Pressable>
         <Text>Siguiente página</Text>
      </Pressable>
    </View>
  )

}

const styles = StyleSheet.create({
  imagen: {
    margin: 1
  }
})