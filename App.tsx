import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import Routes from './src/routes';
import { MoviesProvider } from './src/hooks/listMovies';


export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <View style={{flex: 1, backgroundColor: '#070B24'}}>
      <MoviesProvider>
        <Routes />
      </MoviesProvider>
    </View>
  );
}

