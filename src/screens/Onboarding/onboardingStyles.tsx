import {StyleSheet} from 'react-native';
import textStyle from 'config/sharedStyles/textStyle';
import mainStyles from 'config/sharedStyles/mainStyles';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const createOnboardingStyles = (mainColor: string, secondColor: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: secondColor,
      paddingLeft: 24,
      paddingRight: 80,
      justifyContent: 'flex-end',
      paddingBottom: 60,
    },
    containerWithPadding: {},
    containerHeader: {
      flex: 0.1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 24,
    },
    logoText: {
      ...textStyle.s20BlackBold,
      fontSize: 60, // 18
    },
    containerBtn: {
      backgroundColor: mainStyles.white,
      padding: 10,
      borderRadius: 50,
      ...mainStyles.shadow,
    },
    containerContent: {justifyContent: 'center', flex: 0.9},
    lightTxt: {color: mainColor},
    defaultTxt: {
      ...mainStyles.s20BlackBold,
      fontSize: responsiveFontSize(6.5),
      lineHeight: responsiveFontSize(6.5),
    },
    marginBottom: {marginBottom: 20},
    containerAbsolute: {
      position: 'absolute',
      top: '10%',
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    paddingBgProfilePicture: {
      backgroundColor: mainColor,
      width: responsiveWidth(60),
      height: responsiveWidth(60),
      borderRadius: 200,
      alignItems: 'center',
      justifyContent: 'center',
    },
    profilePicture: {
      width: '90%',
      height: '90%',
      borderRadius: 200,
    },
  });

export const onboardingColor = {
  firstMain: mainStyles.orange,
  firstSecond: mainStyles.lightOrange,
  secondMain: mainStyles.lightRed,
  secondSecond: mainStyles.red,
  thirdMain: mainStyles.blue,
  thirdSecond: mainStyles.lightBlue,
};
export default createOnboardingStyles;
