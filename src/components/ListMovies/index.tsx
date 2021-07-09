import React from 'react';

import {
  View,
  Text,
  FlatList
} from 'react-native';

import { Movie } from '../Movie';
import { styles } from './styles';

export function ListMovies(){
  const movies = [
    {
      id: '1',
      title: 'O Gigante da Colina',
      year: 1998
    },
    {
      id: '2',
      title: 'A volta dos que não foram',
      year: 1954
    }
  ]

  return (
    <FlatList
      data={movies}
      keyExtractor={ item => item.id }
      renderItem={({item}) => (
        <Movie 
          title={item.title}
          year={item.year}
          activeOpacity={0.7}
        />
      )}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
    </FlatList>
  );
}