import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function OnBoard2() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/DB-List.png")} style={styles.img} />

      <Text style={styles.title}>Add and organize your to-dos easily</Text>
      <Text style={styles.subtitle}>From study plans to shopping lists—keep it all done!.</Text>
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
});
