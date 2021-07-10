import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

export function Favorites(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>
          Aqui estão seus filmes favoritos
        </Text>
      </View>
    </View>
  );
}