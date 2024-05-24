import React from 'react';

import {Box} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScreenHeader, ScrollViewContainer, ViewContainer} from './components';
import {ScreenProps} from './ScreenProps';

export const Screen = ({
  children,
  scrollable = false,
  style,
  noPaddingHorizontal = false,
  ...boxProps
}: ScreenProps) => {
  const {colors} = useAppTheme();
  const {top, bottom} = useAppSafeArea();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <Container backgroundColor={colors.background}>
      <Box
        paddingHorizontal={noPaddingHorizontal ? undefined : 's24'}
        style={[{paddingTop: top, paddingBottom: bottom}, style]}
        {...boxProps}>
        <ScreenHeader
          paddingHorizontal={noPaddingHorizontal ? 's24' : undefined}
        />
        {children}
      </Box>
    </Container>
  );
};
