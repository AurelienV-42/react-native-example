import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyText from 'components/MyText';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import MyPageIndicator from 'src/screens/Onboarding/components/MyPageIndicator';
import Next from 'components/Next';
import MainTxtWithPoint from 'src/screens/Onboarding/components/MainTxtWithPoint';
import createOnboardingStyles, {
  onboardingColor,
} from 'src/screens/Onboarding/onboardingStyles';
import {CommonActions} from '@react-navigation/native';
import mainStyles from 'config/sharedStyles/mainStyles';
import ButtonContact from 'src/screens/Onboarding/components/ButtonContact';
import Github from 'assets/images/logo/github_icon.svg';
import GestureRecognizer from 'react-native-swipe-gestures';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

type navigationProps = NativeStackScreenProps<{}>;

const ThirdScreen: React.FC<navigationProps> = ({navigation}) => {
  const {t} = useTranslation('onboarding', {keyPrefix: 'third'});
  const styles = createOnboardingStyles(
    onboardingColor.thirdMain,
    onboardingColor.thirdSecond,
  );

  const goToHome = async () => {
    try {
      const jsonValue = JSON.stringify(true);
      await AsyncStorage.setItem('onboardingDone', jsonValue);
    } catch (e) {
      console.warn(
        'There was an error trying to set AsyncStorage value: onboardingDone to true',
      );
    }
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Home'}],
      }),
    );
  };

  return (
    <GestureRecognizer
      onSwipeLeft={goToHome}
      onSwipeRight={navigation.goBack}
      style={[styles.container, stylesThird.container]}>
      <View style={styles.marginBottom}>
        <MyText style={styles.defaultTxt} txt={t('first')} />
        <MainTxtWithPoint
          mainColor={onboardingColor.thirdMain}
          style={styles.marginBottom}
          txt={t('second')}
        />
        <MyText style={styles.defaultTxt} txt={t('third')} />
      </View>
      <MyPageIndicator step={2} />
      <Next
        go
        mainColor={mainStyles.orange}
        secondColor={mainStyles.lightOrange}
        onPress={goToHome}
      />
      <ButtonContact
        url={'https://github.com/AurelienV-42/react-native-example'}
        svg={
          <Github style={{color: mainStyles.gray1}} width={50} height={50} />
        }
        backgroundColor={mainStyles.blue}
        txt={t('ctaProfile')}
      />
    </GestureRecognizer>
  );
};

const stylesThird = StyleSheet.create({
  container: {paddingRight: 114},
});
export default ThirdScreen;
