import React, { useState, useEffect } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { getApps, initializeApp } from 'firebase/app';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: 'AIzaSyDryA0pulkZLu31mDJ_bWNOCjWpT0Mjbxc',
  authDomain: 'mealstogo-f70f1.firebaseapp.com',
  projectId: 'mealstogo-f70f1',
  storageBucket: 'mealstogo-f70f1.appspot.com',
  messagingSenderId: '158667131823',
  appId: '1:158667131823:web:33cd5abff5f8ad47f27d5a',
};

if (getApps().length < 1) {
  initializeApp(firebaseConfig);
}

export default function App() {
  const [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !LatoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
