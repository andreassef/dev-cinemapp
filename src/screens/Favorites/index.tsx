import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  FlatList
} from 'react-native';
import { Movie } from '../../components/Movie';
import { useMovies } from '../../hooks/listMovies';
import { MovieProps } from '../Movies';
import { styles } from './styles';

import { loadFavoritesMovies } from '../../storage';

export function Favorites(){
  const [movies, setMovies] = useState<MovieProps[]>([])
  // const {movies} = useMovies();

  useEffect(() => {
    async function loadMovies() {
      const moviesStored = await loadFavoritesMovies();
      setMovies(moviesStored);
    }

    loadMovies();
  }, [movies]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>
          Aqui estão seus filmes favoritos
        </Text>
      </View>

      <FlatList
          data={movies}
          keyExtractor={ item => item.imdbID }
          renderItem={({item}) => (
            <Movie 
              Title={item.Title}
              Year={item.Year}
              imdbID={item.imdbID}
              fav={true}
              activeOpacity={0.7}
            />
          )}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
        >
      </FlatList>
    </View>
  );
}