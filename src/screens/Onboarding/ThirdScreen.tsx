import React from 'react';
import {View} from 'react-native';
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

type navigationProps = NativeStackScreenProps<{}>;

const ThirdScreen: React.FC<navigationProps> = ({navigation}) => {
  const styles = createOnboardingStyles(
    onboardingColor.thirdMain,
    onboardingColor.thirdSecond,
  );

  return (
    <GestureRecognizer
      onSwipeRight={navigation.goBack}
      style={[styles.container, {paddingRight: 120}]}>
      <View style={styles.marginBottom}>
        <MyText style={styles.defaultTxt} txt={'This app show'} />
        <MainTxtWithPoint
          mainColor={onboardingColor.thirdMain}
          style={styles.marginBottom}
          txt={'what I can do'}
        />
        <MyText style={styles.defaultTxt} txt={'All the code is available!'} />
      </View>
      <MyPageIndicator step={2} />
      <Next
        go
        mainColor={mainStyles.orange}
        secondColor={mainStyles.lightOrange}
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'Home'}],
            }),
          )
        }
      />
      <ButtonContact
        url={'https://github.com/AurelienV-42/react-native-example'}
        svg={
          <Github style={{color: mainStyles.gray1}} width={50} height={50} />
        }
        backgroundColor={mainStyles.blue}
        txt={'Check my profile'}
      />
    </GestureRecognizer>
  );
};

export default ThirdScreen;
