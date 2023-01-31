import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en';
import fr from './locales/fr';
import {NativeModules, Platform} from 'react-native';
import {getAsyncData} from 'src/utils/asyncData';

const resources = {
  en: {
    ...en,
  },
  fr: {
    ...fr,
  },
};

const defaultLocale = 'en';
const supportedLanguages = ['en', 'fr'];

const LanguageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async () => {
    // Get the stored locale
    const storedLocale = await getAsyncData('LOCALE');
    if (supportedLanguages.includes(storedLocale)) {
      return storedLocale;
    }

    // Get the device locale
    const locale =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager?.settings?.AppleLocale ||
          NativeModules.SettingsManager?.settings?.AppleLanguages[0] ||
          ''
        : NativeModules.I18nManager?.localeIdentifier || '';

    const [lowerCaseLocale] = locale.split('_');

    if (supportedLanguages.includes(lowerCaseLocale)) {
      return lowerCaseLocale;
    }
    console.warn(
      `locale ${lowerCaseLocale} from ${locale} is not supported, defaulting to ${defaultLocale}`,
    );
    return defaultLocale;
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: defaultLocale,
    compatibilityJSON: 'v3',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });
