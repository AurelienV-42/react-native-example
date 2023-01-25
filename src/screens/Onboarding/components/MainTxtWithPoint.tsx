import React from 'react';
import {StyleSheet, View} from 'react-native';
import mainStyles from 'config/sharedStyles/mainStyles';
import MyText from 'components/MyText';

interface PropsType {
  mainColor: string;
  style?: {};
  txt: string;
}

const MainTxtWithPoint: React.FC<PropsType> = ({mainColor, style, txt}) => {
  const styles = createOnboardingStyles(mainColor);

  return (
    <View style={[style, styles.container]}>
      <MyText style={[styles.lightTxt, styles.defaultTxt]} txt={txt} />
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

const createOnboardingStyles = (mainColor: string) =>
  StyleSheet.create({
    container: {alignSelf: 'flex-start'},
    lightTxt: {color: mainColor},
    defaultTxt: {
      ...mainStyles.s20BlackBold,
      fontSize: 50,
      lineHeight: 50,
    },
  });

export default MainTxtWithPoint;
