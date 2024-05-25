import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from '@routes';
import {darkTheme, theme} from '@theme';
import {hideSplashScreen} from '@utils';

const queryClient = new QueryClient();

export const App = () => {
  const deviceTheme = useColorScheme();

  useEffect(() => {
    hideSplashScreen();
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={deviceTheme === 'dark' ? darkTheme : theme}>
          <Router />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
