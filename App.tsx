import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/components/HomePage';
import DetailsPage from './src/components/DetailsPage';
import AddressPage from './src/components/AddressPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsPage}
          options={{ title: 'Ürün Bilgileri' }}
        />
        <Stack.Screen
          name="Address"
          component={AddressPage}
          options={{ title: 'Sipariş Ekranı' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
