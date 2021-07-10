import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  FlatList
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import { styles } from './styles';
import { Movie } from '../../components/Movie';

export type MovieProps = {
  Title: string,
  Year: string,
  imdbID: string,
  Poster?: string
}

export function Movies(){
  const [ movies, setMovies ] = useState<MovieProps[]>([]);
  const [ title, setTitle ] = useState('');

  async function handleInputSearchMovies(title: any) {
    setTitle(title);  
  }

  async function getMovies(){
    const moviesByTitle = await api.get('', {
      params: {
        s: title
      }
    });
    //const response = moviesByTitle.config.data;
    console.log(JSON.stringify(moviesByTitle.data.Search));
    const moviesFinded = moviesByTitle.data.Search;
    !moviesFinded ? setMovies([]) : setMovies(moviesFinded)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>
          Encontre seus filmes prediletos!
        </Text>
      </View>
      <View style={styles.input}>
        <TextInput 
          style={styles.inputText} 
          placeholderTextColor='white'
          placeholder="Digite o nome de um filme" 
          onChangeText={handleInputSearchMovies}
        />
        <RectButton onPress={() => getMovies()} style={styles.button}>
          <Feather name="search" size={25} color={theme.colors.heading} />
        </RectButton>
      </View>
      {
        movies.length == 0 ? 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 18, color: 'white'}}>
            Lista Vazia
          </Text>
        </View>
      :
        <FlatList
          data={movies}
          keyExtractor={ item => item.imdbID }
          renderItem={({item}) => (
            <Movie 
              Title={item.Title}
              Year={item.Year}
              imdbID={item.imdbID}
              activeOpacity={0.7}
            />
          )}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
        >
        </FlatList>
      }
    </View>
  );
}