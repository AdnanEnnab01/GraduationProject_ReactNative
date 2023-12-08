import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';
import Onboarding from './components/Onboarding';
import InnerScreen from './components/InnerScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack'; // Add this line
import HomeScreen from './components/HomeScreen';
import Signup from './components/Signup';
import { NavigationContainer } from '@react-navigation/native';
import BuyHouses from './components/BuyHouses';
    import { HomeScreenReco } from './components/HomeSreenReco';
    import DetailsScreen from './components/DetailsScreen';
    import { BuyCarHouse } from './components/BuyCarHouse';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import { RecomindationHome } from './components/RecomindationHome';
const o = require('./assets/login.png');

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size={'large'} />
    </View>
  );
};
const Stack = createStackNavigator(); // Add this line
export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');
      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (err) {
      console.log('Error @checkOnboarding:', err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    checkOnboarding();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loading ? (
          <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        ) : viewedOnboarding ? (
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        )}
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="Login" component={Login}options={{ headerShown: false  }}/>
                <Stack.Screen name="InnerScreen" component={InnerScreen}options={{ headerShown: false }} />
                <Stack.Screen name="RecomindationHome" component={RecomindationHome}options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreenReco" component={HomeScreenReco}options={{ headerShown: false }} />
                <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
                <Stack.Screen name="BuyCarHouse" component={BuyCarHouse} options={{ headerShown: false }} />
                <Stack.Screen name="BuyHouses" component={BuyHouses} options={{ headerShown: false }} />

                

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Add horizontal padding
  },
});