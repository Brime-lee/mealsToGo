import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthenticationContext } from '../authentication/authentication.context';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const { user } = createContext(AuthenticationContext);

  const saveFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites${user.uid}`, jsonValue);
    } catch (e) {
      console.log('error saving', e);
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favourites');
      if (value) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log('error loading', e);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (user) {
      loadFavorites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavorites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavorites: add, removeFromFavorites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
