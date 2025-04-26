import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function OnBoard4() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/DB-WellDone.png")} style={styles.img} />

      <Text style={styles.title}>Get gentle reminders & cute rewards</Text>
      <Text style={styles.subtitle}>Your productivity buddy that cheers you on!</Text>
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
