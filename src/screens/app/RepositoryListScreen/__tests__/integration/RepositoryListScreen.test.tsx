import React from 'react';

import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {mockedData, resetInMemoryResponse, server} from '@test';
import {fireEvent, render, screen} from 'test-utils';

import {AppStackParamList} from '@routes';

import {PullRequestListScreen} from '../../../PullRequestList/PullRequestListScreen';
import {RepositoryListScreen} from '../../RepositoryListScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

describe('Integration: RepositoryListScreen', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
    resetInMemoryResponse();
  });

  afterAll(() => {
    server.close();
    jest.resetAllMocks();
  });
  it('should go to PullRequestListScreen when press on RepositoryCard', async () => {
    render(
      <Stack.Navigator>
        <Stack.Screen
          name="RepositoryListScreen"
          component={RepositoryListScreen}
        />
        <Stack.Screen
          name="PullRequestListScreen"
          component={PullRequestListScreen}
        />
      </Stack.Navigator>,
    );

    const repositoryCard = await screen.findByTestId(
      `repository-card-${mockedData.mockedResponse.items[0].name}`,
    );

    expect(repositoryCard).toBeTruthy();

    fireEvent.press(repositoryCard);

    const pullRequestScreenTitle = screen.getByTestId(
      `title-${mockedData.mockedResponse.items[0].name}`,
    );

    expect(pullRequestScreenTitle).toBeTruthy();
  });
});
