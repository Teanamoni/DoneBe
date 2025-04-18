import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OnBoard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to OnBoard Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDEBD0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
