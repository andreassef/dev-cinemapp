import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Alert
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { Movie } from '../../components/Movie';
import { useMovies } from '../../hooks/listMovies';
import { loadFavoritesMovies, saveFavoriteMovie, saveInputSearch } from '../../storage';

export type MovieProps = {
  Title: string,
  Year: string,
  imdbID: string,
  Poster?: string,
  isChecked?: boolean
}

export function Movies(){
  const [ title, setTitle ] = useState('');
  const [ moviesList, setMoviesList ] = useState<MovieProps[]>([]);

  const {movies, getMovies} = useMovies();

  useEffect(()=> {
    function handleMovieList() {
      setMoviesList(movies);
    }

    handleMovieList();
  }, [movies])

  async function handleInputSearchMovies(title: any) {
    setTitle(title);  
  }

  async function handleSaveFavorite({Title, imdbID, Year}: MovieProps) {
    try {
      Alert.alert('Favoritar ⭐', `Deseja adicionar ${Title} aos favoritos?`, [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: async () => {
            try {
              await saveFavoriteMovie({
                imdbID,
                Title,
                Year,
                isChecked: true
              })
              await getMovies(title);
              await saveInputSearch(title);
            } catch (error) {
              Alert.alert('Não foi possível remover');
            }
          }
        }
      ])
    } catch (error) {
      console.log('Erro na tela de Movies: ' + error)
    }
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
        <RectButton onPress={() => getMovies(title)} style={styles.button}>
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
          data={moviesList}
          keyExtractor={ item => item.imdbID }
          renderItem={({item}) => (
            <Movie 
              Title={item.Title}
              Year={item.Year}
              imdbID={item.imdbID}
              isChecked={item.isChecked ? true: false}
              onPress={() => handleSaveFavorite({Title: item.Title, Year: item.Year, imdbID: item.imdbID})}
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