import {BoxProps} from '@components';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  scrollable?: boolean;
  noPaddingHorizontal?: boolean;
  title: string;
  subtitle?: string;
  canGoBack?: boolean;
}
