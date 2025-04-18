import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoard from './screens/OnBoard'; // ✅ update path-nya

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate('OnBoard');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={require("./assets/DoneBee.png")} style={styles.img} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OnBoard" component={OnBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFF4E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 300,
    height: 300,
  },
});
