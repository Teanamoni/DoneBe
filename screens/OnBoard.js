import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

export default function OnBoard() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/DB-Welcome.png")} style={styles.img} />

      <Text style={styles.title}>Welcome to DoneBe</Text>
      <Text style={styles.subtitle}>Welcome to your new favorite to-do buddy!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFF4E3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  img: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2B2B2B',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
});
