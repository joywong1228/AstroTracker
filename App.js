import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import StarInfoScreen from './screens/StarInfoScreen';
import ConstellationInfoScreen from './screens/ConstellationInfoScreen';
import PlanetInfoScreen from './screens/PlanetInfoScreen';
import RelatedWeb from './screens/RelatedWeb';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Star Info" component={StarInfoScreen} />
        <Stack.Screen name="Constellation Info" component={StarInfoScreen} />
        <Stack.Screen name="Planet Info" component={StarInfoScreen} />
        <Stack.Screen name="Related Websites" component={RelatedWeb} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
