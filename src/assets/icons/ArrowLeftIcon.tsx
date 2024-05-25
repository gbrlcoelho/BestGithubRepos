import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export const ArrowLeftIcon = ({size = 23, color = 'white'}: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <Path
        d="M0.46967 5.46967C0.176777 5.76257 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.5962 11.0104 6.5962 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989594 6.3033 0.6967C6.01041 0.403807 5.53553 0.403807 5.24264 0.6967L0.46967 5.46967ZM12 5.25L1 5.25L1 6.75L12 6.75L12 5.25Z"
        fill={color}
      />
    </Svg>
  );
};
