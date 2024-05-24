import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;
