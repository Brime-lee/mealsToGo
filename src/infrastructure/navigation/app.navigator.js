import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
      <Tab.Screen name='Map' component={MapScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
