import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnBoard5() {
  const navigation = useNavigation(); // <== fix ReferenceError

  return (
    <View style={styles.container}>
      <Image source={require("../assets/DB-Readyy.png")} style={styles.img} />

      <Text style={styles.title}>You’re ready to bee productive!</Text>
      <Text style={styles.subtitle}>Tap below to start your DoneBe journey.</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Start"
          onPress={() => navigation.navigate('Lobby')}
          color="#34A853"
        />
      </View>
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
    marginTop: 15,
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
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 10,
    height: 48,
  },
});
