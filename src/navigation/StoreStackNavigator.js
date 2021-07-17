import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import StoreScreen from '../screens/StoreScreen';

const Stack = createStackNavigator();


export default function StoreStackNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ff9200',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Store" component={StoreScreen} />
    </Stack.Navigator>
  );
}
