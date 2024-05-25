import React, {useCallback} from 'react';
import {ListRenderItem} from 'react-native';

import {InfinityScrollList, Screen} from '@components';
import {Repository, repositoryService} from '@domain';
import {useAppTheme} from '@hooks';
import {QueryKeys} from '@infra';
import {AppScreenProps} from '@routes';

import {RepositoryCard} from './components';

export const RepositoryListScreen = ({
  navigation,
}: AppScreenProps<'RepositoryListScreen'>) => {
  const {spacing} = useAppTheme();

  const navigateToPullRequestList = useCallback(
    ({name, owner}: Repository) => {
      navigation.navigate('PullRequestListScreen', {
        repository: {name, owner: owner.name},
      });
    },
    [navigation],
  );

  const renderItem: ListRenderItem<Repository> = useCallback(
    ({item}) => (
      <RepositoryCard item={item} onPress={navigateToPullRequestList} />
    ),
    [navigateToPullRequestList],
  );

  return (
    <Screen
      flex={1}
      noPaddingHorizontal
      title={'Melhores repositórios do\nGithub ⭐️'}
      subtitle="Explore os melhores repositórios">
      <InfinityScrollList
        queryKey={QueryKeys.REPOSITORIES_LIST}
        getList={page => repositoryService.getList(page)}
        emptyListProps={{
          emptyMessage: 'Nenhum repositório foi encontrado 😢',
          errorMessage: 'Ocorreu um erro ao buscar os repositórios 😢',
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
