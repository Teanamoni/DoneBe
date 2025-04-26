import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

// Import screens
import OnBoardScreen from './screens/OnBoardScreen';
import Lobby from './screens/Lobby';
import NoteDetail from './screens/NoteDetail'; // ⬅️ Import tambahan

const Stack = createNativeStackNavigator();

// Pindahkan ke atas dulu
function DoneBeeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Tekan gambar untuk masuk ke OnBoarding */}
      <TouchableOpacity onPress={() => navigation.navigate('OnBoard')}>
        <Image source={require('./assets/DoneBee.png')} style={styles.img} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={DoneBeeScreen} />
        <Stack.Screen name="OnBoard" component={OnBoardScreen} />
        <Stack.Screen name="Lobby" component={Lobby} />
        <Stack.Screen name="NoteDetail" component={NoteDetail} />
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
