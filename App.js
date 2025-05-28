import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import StarInfoScreen from './screens/StarInfoScreen';
import RelatedWeb from './screens/RelatedWeb';
import SkyMapScreen from './screens/SkyMapScreen';
import CalendarScreen from './screens/CalendarScreen';
import { ThemeProvider } from './contexts/ThemeContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Star Info" component={StarInfoScreen} />
          <Stack.Screen name="Related Websites" component={RelatedWeb} />
          <Stack.Screen name="Sky Map" component={SkyMapScreen} />
          <Stack.Screen name="Calendar" component={CalendarScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
