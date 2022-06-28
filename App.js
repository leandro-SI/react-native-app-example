import { StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/Cesta';

export default function App() {

  const [fonteCarregata] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "montserratBold": Montserrat_700Bold
  });

  if (!fonteCarregata) {
    return <View></View>
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
