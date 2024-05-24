import React from 'react';

import {Logo} from '@brand';

import {Box, Icon, TouchableOpacityBox} from '@components';

import {ScreenHeaderProps} from './ScreenHeaderProps';

const ICON_SIZE = 23;

export const ScreenHeader = ({...boxProps}: ScreenHeaderProps) => {
  return (
    <Box
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      marginBottom="s24"
      {...boxProps}>
      <TouchableOpacityBox
        testID="screen-back-button"
        flexDirection="row"
        alignItems="center">
        <Icon name="menu" size={ICON_SIZE} />
      </TouchableOpacityBox>
      <Logo />
      <Box width={ICON_SIZE} height={ICON_SIZE} />
    </Box>
  );
};
