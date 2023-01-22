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

type navigationProps = NativeStackScreenProps<{}>;

const FirstScreen: React.FC<navigationProps> = ({navigation}) => {
  const styles = createOnboardingStyles(
    onboardingColor.firstMain,
    onboardingColor.firstSecond,
  );

  return (
    <View style={styles.container}>
      <View style={styles.marginBottom}>
        <MyText style={styles.defaultTxt} txt={'I can be '} />
        <MainTxtWithPoint
          mainColor={onboardingColor.firstMain}
          style={styles.marginBottom}
          txt={'the man you need'}
        />
        <MyText style={styles.defaultTxt} txt={"Let's see this!"} />
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
    </View>
  );
};

export default FirstScreen;
