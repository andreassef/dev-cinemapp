import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  Alert
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { loadFavoritesMovies } from '../../storage';

type Props = RectButtonProps &{
  Title: string,
  Year: string,
  imdbID: string,
  isChecked?: boolean
};

export function Movie( { Title, Year, imdbID, isChecked, ...rest}: Props ){

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
          isChecked ?
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