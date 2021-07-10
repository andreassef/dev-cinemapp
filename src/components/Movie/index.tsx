import React, { useState } from 'react';

import {
  View,
  Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { MovieProps } from '../../screens/Movies';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & MovieProps;

export function Movie( { Title, Year, imdbID, ...rest}: Props ){
  const [ isFavorite, setIsFavorite ] = useState(false);

  function handleFavorite() {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true);
  }

  return (
    <RectButton
      {...rest}
      onPress={handleFavorite}
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