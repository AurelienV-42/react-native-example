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
import ButtonContact from 'src/screens/Onboarding/components/ButtonContact';
import mainStyles from 'config/sharedStyles/mainStyles';
import Malt from 'assets/images/logo/malt_icon.svg';
import GestureRecognizer from 'react-native-swipe-gestures';

type navigationProps = NativeStackScreenProps<{}>;
const SecondScreen: React.FC<navigationProps> = ({navigation}) => {
  const styles = createOnboardingStyles(
    onboardingColor.secondMain,
    onboardingColor.secondSecond,
  );

  return (
    <GestureRecognizer
      onSwipeLeft={() => navigation.push('ThirdOnboarding')}
      onSwipeRight={navigation.goBack}
      style={[styles.container, stylesSecond.container]}>
      <View style={styles.marginBottom}>
        <MyText style={styles.defaultTxt} txt={'Freelance'} />
        <MainTxtWithPoint
          mainColor={onboardingColor.secondMain}
          style={styles.marginBottom}
          txt={'developer'}
        />
        <MyText style={styles.defaultTxt} txt={'But also'} />
        <MainTxtWithPoint
          mainColor={onboardingColor.secondMain}
          style={styles.marginBottom}
          txt={'designer'}
        />
        <MyText style={styles.defaultTxt} txt={'Everything for your app!'} />
      </View>
      <MyPageIndicator step={1} />
      <Next
        mainColor={onboardingColor.thirdMain}
        secondColor={onboardingColor.thirdSecond}
        onPress={() => navigation.push('ThirdOnboarding')}
      />
      <ButtonContact
        url={'https://www.malt.fr/profile/aurelienvandaele'}
        svg={<Malt style={{color: mainStyles.red}} width={50} height={50} />}
        backgroundColor={mainStyles.lightRed}
        txt={'Check my profile'}
      />
    </GestureRecognizer>
  );
};

const stylesSecond = StyleSheet.create({
  container: {paddingRight: 20},
});

export default SecondScreen;
