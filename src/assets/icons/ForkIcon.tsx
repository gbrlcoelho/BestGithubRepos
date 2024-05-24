import React from 'react';

import {Defs, Image, Pattern, Rect, Svg, Use} from 'react-native-svg';

import {IconBase} from '@components';

export const ForkIcon = ({size = 10}: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 11 10" fill="none">
      <Rect width="10.1818" height="10" fill="url(#pattern0_361_165)" />
      <Defs>
        <Pattern
          id="pattern0_361_165"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <Use transform="matrix(0.00390625 0 0 0.00397727 0 -0.0090909)" />
        </Pattern>
        <Image id="image0_361_165" width="256" height="256" />
      </Defs>
    </Svg>
  );
};
