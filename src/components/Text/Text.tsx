import React from 'react';

import {$fontSizes, getFontStyle} from './TextPresets';
import {SRText, TextProps} from './TextProps';

export const Text = ({
  children,
  preset = 'paragraphMedium',
  bold,
  italic,
  semiBold,
  style,
  textColor = 'text',
  ...sRTextProps
}: TextProps) => {
  const fontStyle = getFontStyle(preset, bold, italic, semiBold);
  return (
    <SRText
      color={textColor}
      style={[$fontSizes[preset], {...fontStyle}, style]}
      {...sRTextProps}>
      {children}
    </SRText>
  );
};
