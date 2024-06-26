import {Linking} from 'react-native';

import {OpenUrl} from './openUrlTypes';

export const openUrl: OpenUrl = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  });
};
