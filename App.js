import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // Tahan splash screen

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      // Simulasi loading data, bisa diganti dengan real data
      await new Promise(resolve => setTimeout(resolve, 2000));
      setAppIsReady(true);
      await SplashScreen.hideAsync(); // Sembunyikan splash screen
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null; // Biarkan splash screen tetap muncul
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to DoneBe 🐝</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDF5E1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
