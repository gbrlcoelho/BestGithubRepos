import React from 'react';

import {Line, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export const MenuIcon = ({}: IconBase) => {
  return (
    <Svg width="21" height="15" viewBox="0 0 21 15" fill="none">
      <Line y1="7.5" x2="21" y2="7.5" stroke="black" stroke-width="3" />
      <Line y1="1.5" x2="21" y2="1.5" stroke="black" stroke-width="3" />
      <Line y1="13.5" x2="21" y2="13.5" stroke="black" stroke-width="3" />
    </Svg>
  );
};
