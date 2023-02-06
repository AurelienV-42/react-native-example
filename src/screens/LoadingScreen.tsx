import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MyText from 'components/MyText';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import colors from 'config/sharedStyles/colors';
import textStyle from 'config/sharedStyles/textStyle';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {CommonActions} from '@react-navigation/native';
import {getAsyncData} from 'src/utils/asyncData';
import {getNotionDatabase} from 'src/utils/notionAPI';
import i18next from 'i18next';

type navigationProps = NativeStackScreenProps<{}>;

const LoadingScreen: React.FC<navigationProps> = ({navigation}) => {
  let forceGoToOnboarding = false;
  if (__DEV__) {
    forceGoToOnboarding = true;
  }
  const resetTo = (nameRoute: string) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: nameRoute}],
      }),
    );
  };

  const setTextFromNotion = async () => {
    const notionData = await getNotionDatabase();
    if (notionData) {
      for (const key in notionData) {
        i18next.addResourceBundle(key, 'blog', notionData[key]?.blog);
      }
    }
  };

  const goToOnboardingOrHome = async () => {
    await setTextFromNotion();
    if (forceGoToOnboarding) {
      resetTo('FirstOnboarding');
      return;
    }
    const value = await getAsyncData('ONBOARDING_DONE');
    if (value !== null) {
      resetTo('Home');
    } else {
      resetTo('FirstOnboarding');
    }
  };

  useEffect(() => {
    goToOnboardingOrHome();
  }, [goToOnboardingOrHome]);

  return (
    <View style={styles.container}>
      <MyText style={styles.logoText} txt={'Aurél.'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    ...textStyle.s20BlackBold,
    fontSize: responsiveFontSize(9.8),
  },
});

export default LoadingScreen;
