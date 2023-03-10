import React from 'react';
import {Image, View} from 'react-native';
import MyText from 'components/MyText';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import MyPageIndicator from 'src/screens/Onboarding/components/MyPageIndicator';
import Next from 'components/Next';
import MainTxtWithPoint from 'src/screens/Onboarding/components/MainTxtWithPoint';
import createOnboardingStyles, {
  onboardingColor,
} from 'src/screens/Onboarding/onboardingStyles';
import images from 'assets/index';
import GestureRecognizer from 'react-native-swipe-gestures';
import {useTranslation} from 'react-i18next';

type navigationProps = NativeStackScreenProps<{}>;

const FirstScreen: React.FC<navigationProps> = ({navigation}) => {
  const {t} = useTranslation('onboarding', {keyPrefix: 'first'});
  const styles = createOnboardingStyles(
    onboardingColor.firstMain,
    onboardingColor.firstSecond,
  );

  return (
    <GestureRecognizer
      onSwipeLeft={() => navigation.push('SecondOnboarding')}
      style={styles.container}>
      <View style={styles.marginBottom}>
        <MyText style={styles.defaultTxt} txt={t('first')} />
        <MainTxtWithPoint
          mainColor={onboardingColor.firstMain}
          style={styles.marginBottom}
          txt={t('second')}
        />
        <MyText style={styles.defaultTxt} txt={t('third')} />
      </View>
      <MyPageIndicator step={0} />
      <Next
        mainColor={onboardingColor.secondMain}
        secondColor={onboardingColor.secondSecond}
        onPress={() => navigation.push('SecondOnboarding')}
      />
      <View style={styles.containerAbsolute}>
        <View style={styles.paddingBgProfilePicture}>
          <Image
            style={[styles.profilePicture]}
            source={images.profile_picture}
          />
        </View>
      </View>
    </GestureRecognizer>
  );
};

export default FirstScreen;
