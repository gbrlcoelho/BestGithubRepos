import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export const MenuIcon = ({color, size = 23}: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 23 23" fill="none">
      <Path
        d="M2 2H21M2 9.125H21M2 16.25H21"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
