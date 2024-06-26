import React, {useRef} from 'react';
import {FlatList, RefreshControl} from 'react-native';

import {useScrollToTop} from '@react-navigation/native';

import {Separator} from '@components';
import {usePaginatedList} from '@infra';

import {EmptyList} from './components/EmptyList';
import {
  InfinityScrollListProps,
  ItemTConstraints,
} from './InfinityScrollListProps';

const separator = () => <Separator />;

export const InfinityScrollList = <ItemT extends ItemTConstraints>({
  flatListProps,
  emptyListProps,
  queryKey,
  getList,
  queryKeyParams,
  renderItem,
}: InfinityScrollListProps<ItemT>) => {
  const flatListRef = useRef<FlatList<ItemT>>(null);
  useScrollToTop(flatListRef);

  const {list, isError, isLoading, refresh, fetchNextPage} = usePaginatedList(
    [queryKey, queryKeyParams],
    getList,
  );

  const contentContainerStyleFlex = list.length === 0 ? 1 : undefined;

  return (
    <FlatList
      ref={flatListRef}
      showsVerticalScrollIndicator={false}
      data={list}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.1}
      refreshing={isLoading}
      ItemSeparatorComponent={separator}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refresh} />
      }
      ListEmptyComponent={
        <EmptyList
          loading={isLoading}
          error={isError}
          refresh={refresh}
          {...emptyListProps}
        />
      }
      {...flatListProps}
      contentContainerStyle={[
        {flex: contentContainerStyleFlex},
        flatListProps?.contentContainerStyle,
      ]}
    />
  );
};
