import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  FlatList,
  Alert
} from 'react-native';
import { Movie } from '../../components/Movie';
import { useMovies } from '../../hooks/listMovies';
import { MovieProps } from '../Movies';
import { styles } from './styles';

import { loadFavoritesMovies, removeFavoriteMovie } from '../../storage';

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

  async function remove(id: string, Title: string) {
    Alert.alert('Remover ⭐', `Deseja remover ${Title} dos favoritos?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            await removeFavoriteMovie(id);
          } catch (error) {
            Alert.alert('Não foi possível remover');
          }
        }
      }
    ])
  }
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
              onPress={() => remove(item.imdbID, item.Title)}
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