import React, {useCallback} from 'react';
import {ListRenderItem} from 'react-native';

import {
  ActivityIndicator,
  Box,
  InfinityScrollList,
  Screen,
  Text,
} from '@components';
import {PullRequest, pullRequestService, usePullRequestCount} from '@domain';
import {useAppTheme} from '@hooks';
import {QueryKeys} from '@infra';
import {AppScreenProps} from '@routes';

import {PullRequestCard} from './components';

export const PullRequestListScreen = ({
  route,
}: AppScreenProps<'PullRequestListScreen'>) => {
  const {spacing} = useAppTheme();
  const {count, isLoading, error} = usePullRequestCount({
    repo: route.params.repository.name,
    owner: route.params.repository.owner,
  });

  const renderItem: ListRenderItem<PullRequest> = useCallback(
    ({item}) => <PullRequestCard item={item} />,
    [],
  );

  return (
    <Screen
      flex={1}
      noPaddingHorizontal
      title={route.params.repository.name}
      canGoBack>
      <Box
        padding="s24"
        backgroundColor="background"
        flexDirection="row"
        shadowColor="shadow"
        shadowOffset={{
          width: 0,
          height: 2,
        }}
        shadowOpacity={0.25}
        shadowRadius={3.84}
        elevation={5}>
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text bold>
            Ocorreu um erro ao buscar a contagem de pull requests 😢
          </Text>
        ) : (
          <>
            <Text color="accentText" bold>
              {count?.openPullRequests} Abertos
            </Text>
            <Text bold> / {count?.closedPullRequests} Fechados</Text>
          </>
        )}
      </Box>
      <InfinityScrollList
        queryKey={QueryKeys.PULL_REQUESTS_LIST}
        queryKeyParams={`${route.params.repository}-${route.params.repository.owner}`}
        getList={page =>
          pullRequestService.getList({
            repo: route.params.repository.name,
            owner: route.params.repository.owner,
            page,
          })
        }
        emptyListProps={{
          emptyMessage: 'Nenhum pull request foi encontrado 😢',
          errorMessage: 'Ocorreu um erro ao buscar os pull requests 😢',
        }}
        renderItem={renderItem}
        flatListProps={{
          style: {paddingTop: spacing.s40},
          contentContainerStyle: {
            paddingHorizontal: spacing.s40,
            gap: spacing.s8,
          },
        }}
      />
    </Screen>
  );
};
