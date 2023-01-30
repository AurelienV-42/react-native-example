import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en';
import fr from './locales/fr';
import {NativeModules, Platform} from 'react-native';

// iOS:
const getLocale = () => {
  if (Platform.OS === 'ios') {
    return (
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    );
  }
  return NativeModules.I18nManager.localeIdentifier;
};

const resources = {
  en: {
    ...en,
  },
  fr: {
    ...fr,
  },
};

const defaultLocale = getLocale().toString().includes('fr') ? 'fr' : 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLocale,
  fallbackLng: defaultLocale,
  compatibilityJSON: 'v3',
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});
