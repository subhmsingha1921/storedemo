import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';

import StoreStackNavigator from './StoreStackNavigator';
import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';
import HistoryScreen from '../screens/HistoryScreen';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator 
      initialRouteName="Store Stack"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          height: 60,
          elevation: 0,
        },
        activeTintColor: '#ff9401',
        inactiveTintColor: '#dddddd',
      }}
      backBehavior='initialRoute'
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Store Stack" 
        component={StoreStackNavigator}
        options={{
          tabBarLabel: 'Store',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="basket-outline" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Wallet" 
        component={WalletScreen}
        options={{
          tabBarLabel: 'Z Wallet',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="History" 
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="paper-plane-o" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
