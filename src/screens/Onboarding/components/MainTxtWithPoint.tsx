import React from 'react';
import {StyleSheet, View} from 'react-native';
import mainStyles from 'config/sharedStyles/mainStyles';
import MyText from 'components/MyText';
import {onboardingColor} from 'src/screens/Onboarding/onboardingStyles';

interface PropsType {
  mainColor: string;
  style?: {};
  txt: string;
}

const MainTxtWithPoint: React.FC<PropsType> = ({mainColor, style, txt}) => {
  const styles = createOnboardingStyles(mainColor);

  return (
    <View style={[style, {alignSelf: 'flex-start'}]}>
      <MyText style={[styles.lightTxt, styles.defaultTxt]} txt={txt} />
      <MyText
        style={[
          styles.defaultTxt,
          {position: 'absolute', right: -15, bottom: 0},
        ]}
        txt={'.'}
      />
    </View>
  );
};

const createOnboardingStyles = (mainColor: string) =>
  StyleSheet.create({
    lightTxt: {color: mainColor},
    defaultTxt: {
      ...mainStyles.s20BlackBold,
      fontSize: 50,
      lineHeight: 50,
    },
  });

export default MainTxtWithPoint;
