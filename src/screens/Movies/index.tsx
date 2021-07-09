import React from 'react';

import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { ListMovies } from '../../components/ListMovies';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function Movies(){
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput style={styles.inputText} placeholderTextColor='white' placeholder="Digite o nome de um filme" />
        <RectButton style={styles.button}>
          <Text style={styles.buttonTitle}>
            Buscar
          </Text>
        </RectButton>
      </View>
      <ListMovies />
    </View>
  );
}