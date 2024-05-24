import React from 'react';

import Svg, {Defs, Image, Pattern, Rect, Use} from 'react-native-svg';
import {IconBase} from 'src/components/Icon/IconProps';

export const StarIcon = ({size = 10}: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 10 10" fill="none">
      <Rect width="10" height="10" fill="url(#pattern0_361_167)" />
      <Defs>
        <Pattern
          id="pattern0_361_167"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <Use transform="scale(0.000976562)" />
        </Pattern>
        <Image id="image0_361_167" width="1024" height="1024" />
      </Defs>
    </Svg>
  );
};
