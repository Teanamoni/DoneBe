import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

export default function OnBoard() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/DB-Welcome.png")} style={styles.img} />

      <Text style={styles.title}>Welcome to DoneBe</Text>
      <Text style={styles.subtitle}>Welcome to your new favorite to-do buddy!</Text>

      <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFF4E3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: 350
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2B2B2B',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 30,
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50, // Sama persis dengan OnBoardScreen.js
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E5DCEB',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#60C26C',
  },
});
