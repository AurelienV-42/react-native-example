import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAsyncData = async (storageKey: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    console.warn('ERROR: AsyncStorage STORE: onboardingDone');
  }
};

export const getAsyncData = async (storageKey: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn('ERROR: AsyncStorage GET: onboardingDone');
  }
};
