import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      })}
    >
      <RestaurantStack.Screen
        name='Restaurants'
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name='RestaurantDetail'
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};