import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function OnBoard3() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/DB-Tablet.png")} style={styles.img} />

      <Text style={styles.title}>Add and organize you</Text>
      <Text style={styles.subtitle}>Log in & access your list anywhere, anytime.</Text>
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
    marginTop: 15
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
