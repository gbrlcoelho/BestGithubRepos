import BootSplash from 'react-native-bootsplash';

export const hideSplashScreen = async () => {
  try {
    const isVisible = await BootSplash.isVisible();
    if (isVisible) {
      await BootSplash.hide({fade: true});
    }
  } catch (error) {
    await BootSplash.hide();
  }
};
