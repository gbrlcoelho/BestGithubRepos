import {TextStyle} from 'react-native';

export type TextPresets =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const getFontStyle = (
  preset: TextPresets,
  bold?: boolean,
  italic?: boolean,
  semiBold?: boolean,
): TextStyle => {
  const fontStyle: TextStyle = {};

  if (['headingLarge', 'headingMedium', 'headingSmall'].includes(preset)) {
    fontStyle.fontWeight = 'bold';
    fontStyle.fontStyle = italic ? 'italic' : 'normal';
    return fontStyle;
  }

  if (bold) {
    fontStyle.fontWeight = 'bold';
  } else if (semiBold) {
    fontStyle.fontWeight = '600';
  } else {
    fontStyle.fontWeight = 'normal';
  }

  fontStyle.fontStyle = italic ? 'italic' : 'normal';

  return fontStyle;
};

export const $fontSizes: Record<TextPresets, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};
