import {Linking} from 'react-native';

import {OpenUrl} from './openUrlTypes';

export const openUrl: OpenUrl = url => {
  Linking.openURL(url);
};
