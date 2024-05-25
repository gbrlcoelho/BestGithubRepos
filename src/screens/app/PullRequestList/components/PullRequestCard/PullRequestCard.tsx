import React from 'react';
import {Image} from 'react-native';

import {Box, Text, TouchableOpacityBox} from '@components';
import {openUrl} from '@utils';

import {PullRequestCardProps} from './types';

const FONT_WEIGHT = '700';

export const PullRequestCard = ({item}: PullRequestCardProps) => {
  const onPressItem = () => {
    openUrl(item.pullRequestUrl);
  };

  return (
    <TouchableOpacityBox flex={1} onPress={onPressItem}>
      <Text
        preset="paragraphMedium"
        color="accentText"
        style={{fontWeight: FONT_WEIGHT}}>
        {item.title}
      </Text>

      <Text
        marginTop="s4"
        preset="paragraphCaption"
        ellipsizeMode="tail"
        numberOfLines={4}>
        {item.body}
      </Text>
      <Box
        flexDirection="row"
        alignItems="center"
        gap="s10"
        marginTop="s12"
        paddingBottom="s10">
        <Image
          source={{uri: item.author.avatarUrl}}
          style={{width: 40, height: 40, borderRadius: 8}}
        />
        <Box>
          <Text marginTop="s4" preset="paragraphSmall" bold color="accentText">
            {item.author.name}
          </Text>
          <Text marginTop="s4" preset="paragraphCaption">
            {item.date}
          </Text>
        </Box>
      </Box>
    </TouchableOpacityBox>
  );
};
