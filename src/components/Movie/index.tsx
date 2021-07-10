import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  Alert
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { MovieProps } from '../../screens/Movies';
import { theme } from '../../global/styles/theme';
import { useMovies } from '../../hooks/listMovies';
import { saveFavoriteMovie } from '../../storage';

type Props = RectButtonProps &{
  Title: string,
  Year: string,
  imdbID: string,
  fav: boolean
};

export function Movie( { Title, Year, imdbID, fav, ...rest}: Props ){
  const [ isFavorite, setIsFavorite ] = useState(false);

  useEffect(() =>{
    function isfav() {
      setIsFavorite(fav);
    }
    isfav();
  }, [])
  

  return (
    <RectButton
      {...rest}
      style={styles.container}
    >
      
        <View style={styles.content}>
          <Text style={styles.title}>
            {Title}
          </Text>

          <Text style={styles.year}>
            {`Ano: ${Year}`}
          </Text>
        </View>

        {
          isFavorite ?
          <AntDesign 
            name="star"
            color={'#dda520'}
            size={28}
          />
        :
          <AntDesign 
            name="staro"
            color={'#dda520'}
            size={28}
          />
        }
    </RectButton>
  );
}