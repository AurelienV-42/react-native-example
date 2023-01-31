import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyText from 'components/MyText';
import createOnboardingStyles from 'src/screens/Onboarding/onboardingStyles';

interface PropsType {
  mainColor: string;
  style?: {};
  txt: string;
}

const MainTxtWithPoint: React.FC<PropsType> = ({mainColor, style, txt}) => {
  const styles = createStyles(mainColor);
  const onboardingStyles = createOnboardingStyles(mainColor, 'white');

  return (
    <View style={[style, styles.container]}>
      <MyText
        style={[styles.lightTxt, onboardingStyles.defaultTxt]}
        txt={txt}
      />
      {/* TODO <MyText*/}
      {/*  style={[*/}
      {/*    styles.defaultTxt,*/}
      {/*    {position: 'absolute', right: -15, bottom: 0},*/}
      {/*  ]}*/}
      {/*  txt={'.'}*/}
      {/*/>*/}
    </View>
  );
};

const createStyles = (mainColor: string) =>
  StyleSheet.create({
    container: {alignSelf: 'flex-start'},
    lightTxt: {color: mainColor},
  });

export default MainTxtWithPoint;
