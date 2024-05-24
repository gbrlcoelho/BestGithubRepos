import {ForkIcon, MenuIcon, StarIcon} from '@icons';
import {ThemeColors} from '@theme';

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  fillColor?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export interface IconBase {
  size?: number;
  color?: string;
  fillColor?: string;
}

export const iconRegistry = {
  star: StarIcon,
  fork: ForkIcon,
  menu: MenuIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
