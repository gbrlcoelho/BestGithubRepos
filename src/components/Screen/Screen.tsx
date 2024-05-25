import React from 'react';
import {Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScreenHeader, ScrollViewContainer, ViewContainer} from './components';
import {ScreenProps} from './ScreenProps';

const titleFontWeight = Platform.OS === 'ios' ? '900' : 'bold';

export const Screen = ({
  children,
  scrollable = false,
  style,
  noPaddingHorizontal = false,
  title,
  subtitle,
  canGoBack = false,
  ...boxProps
}: ScreenProps) => {
  const {colors} = useAppTheme();
  const {top, bottom} = useAppSafeArea();
  const {goBack} = useNavigation();

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
        <Box
          paddingVertical="s16"
          backgroundColor="text"
          gap="s16"
          justifyContent={canGoBack ? 'space-between' : undefined}
          alignItems={canGoBack ? 'center' : 'flex-start'}
          flexDirection={canGoBack ? 'row' : 'column'}
          paddingHorizontal={noPaddingHorizontal ? 's40' : undefined}>
          {canGoBack && (
            <Box right={14}>
              <Icon name="arrowLeft" color="background" onPress={goBack} />
            </Box>
          )}
          <Text
            preset="headingLarge"
            color="textContrast"
            bold
            style={{fontWeight: titleFontWeight}}>
            {title}
          </Text>
          {canGoBack && <Box width={23} height={23} />}
          {subtitle && (
            <Text preset="paragraphMedium" color="lightSecondary">
              {subtitle}
            </Text>
          )}
        </Box>
        {children}
      </Box>
    </Container>
  );
};
