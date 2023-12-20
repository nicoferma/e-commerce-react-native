import { ActivityIndicator, Text } from 'react-native';
import { useFonts } from 'expo-font'
import Categories from './src/Screens/Categories';
import ProductsByCategory from './src/Screens/ProductsByCategory';
import { useState } from 'react';
import ProductDetail from './src/Screens/ProductDetail';
import Navigator from './src/navigation/Navigator';

export default function App() {
  const [fontLoaded] = useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  })


  if (!fontLoaded) return <ActivityIndicator />


  return (
    <Navigator />
  );
}

