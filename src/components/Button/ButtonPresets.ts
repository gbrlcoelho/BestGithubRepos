import {TextProps, TouchableOpacityBoxProps} from '@components';
import {ThemeColors} from '@theme';

export type ButtonPreset = 'primary' | 'outline';

export interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: {color: ThemeColors; textProps?: TextProps};
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'text',
      },
      content: {color: 'textContrast'},
    },
    disabled: {
      container: {
        backgroundColor: 'lightSecondary',
      },
      content: {color: 'secondary'},
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'text',
      },
      content: {color: 'text'},
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'lightSecondary',
      },
      content: {color: 'secondary'},
    },
  },
};
