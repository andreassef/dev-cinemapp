import React, { useState } from 'react';

import {
  View,
  Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  title: string,
  year: number,
}

export function Movie( {title, year,...rest}: Props ){
  const [ isFavorite, setIsFavorite ] = useState(false);

  function handleFavorite() {
    console.log('clicou')
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
            {title}
          </Text>

          <Text style={styles.year}>
            {year}
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