import React from 'react';
import {Image} from 'react-native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {RepositoryCardProps} from './RepositoryCardProps';

const FONT_WEIGHT = '700';

export const RepositoryCard = ({item, onPress}: RepositoryCardProps) => {
  const onPressItem = () => {
    onPress(item);
  };

  return (
    <TouchableOpacityBox
      flex={1}
      onPress={onPressItem}
      testID={`repository-card-${item.name}`}>
      <Text
        preset="paragraphMedium"
        color="accentText"
        style={{fontWeight: FONT_WEIGHT}}>
        {item.name}
      </Text>
      <Box flexDirection="row" flex={1}>
        <Box flex={0.6}>
          <Text
            marginTop="s4"
            preset="paragraphCaption"
            ellipsizeMode="tail"
            numberOfLines={4}>
            {item.description}
          </Text>
        </Box>
        <Box flex={0.4} alignItems="center" justifyContent="center" gap="s4">
          <Image
            source={{uri: item.owner.avatar}}
            style={{width: 40, height: 40, borderRadius: 8}}
          />

          <Text marginTop="s4" preset="paragraphSmall" bold color="accentText">
            {item.owner.name}
          </Text>
        </Box>
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        gap="s14"
        marginTop="s12"
        paddingBottom="s10">
        <Box flexDirection="row" alignItems="center" gap="s4">
          <Icon name="fork" size={18} />
          <Text preset="paragraphCaption">{item.forks}</Text>
        </Box>
        <Box flexDirection="row" alignItems="center" gap="s4">
          <Icon name="star" />
          <Text preset="paragraphCaption">{item.stars}</Text>
        </Box>
      </Box>
    </TouchableOpacityBox>
  );
};
