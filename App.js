import { StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

export default function App() {

  const [fonteCarregata] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "montserratBold": Montserrat_700Bold
  });

  if (!fonteCarregata) {
    return <AppLoading></AppLoading>
  }

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar/>
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
