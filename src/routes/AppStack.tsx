import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PullRequestListScreen, RepositoryListScreen} from '@screens';

export type AppStackParamList = {
  PullRequestListScreen: {
    repository: {
      name: string;
      owner: string;
    };
  };
  RepositoryListScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

interface AppStackProps {
  initialRouteName?: keyof AppStackParamList;
}

export const AppStack = ({
  initialRouteName = 'RepositoryListScreen',
}: AppStackProps) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={initialRouteName}>
      <Stack.Screen
        name="RepositoryListScreen"
        component={RepositoryListScreen}
      />
      <Stack.Screen
        name="PullRequestListScreen"
        component={PullRequestListScreen}
      />
    </Stack.Navigator>
  );
};
