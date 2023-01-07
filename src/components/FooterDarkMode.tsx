import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './Button';
import QuestionMark from 'assets/images/UI/question_info.svg';
import Sun from 'assets/images/UI/sun.svg';
import Moon from 'assets/images/UI/moon.svg';
import colors from '../../config/sharedStyles/colors';
import mainStyles from '../../config/sharedStyles/mainStyles';
interface PropsType {
  isDarkMode: boolean;
  setDarkMode: (arg0: boolean) => void;
}

const FooterDarkMode: React.FC<PropsType> = ({isDarkMode, setDarkMode}) => {
  const styles = createStyles(isDarkMode);
  const ColourSchemeInfo = () => {
    return (
      <View style={styles.containerColourScheme}>
        <Button
          txt={'Colour Scheme'}
          svg={<QuestionMark style={styles.colorSvg} height="24" width="24" />}
          isDarkMode={isDarkMode}
        />
      </View>
    );
  };

  const SwitchButtons = () => {
    return (
      <View style={styles.containerButton}>
        <Button
          onPress={() => isDarkMode && setDarkMode(false)}
          style={[styles.buttonSwitch, styles.buttonLight]}
          svg={<Sun style={styles.colorSvg} height="24" width="24" />}
          txt={'Light'}
          txtStyle={styles.textLight}
          isDarkMode={isDarkMode}
        />
        <Button
          onPress={() => !isDarkMode && setDarkMode(true)}
          style={[styles.buttonSwitch, styles.buttonDark]}
          svg={<Moon style={styles.colorSvg} height="24" width="24" />}
          txt={'Dark'}
          txtStyle={styles.textDark}
          isDarkMode={isDarkMode}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <ColourSchemeInfo />
      <SwitchButtons />
    </View>
  );
};

const createStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    colorSvg: {
      color: isDarkMode ? colors.gray4 : colors.gray2,
    },
    container: {
      flex: 0.1,
      justifyContent: 'center',
    },
    divider: {
      width: '100%',
      height: 2,
      backgroundColor: isDarkMode ? colors.gray1 : colors.gray2,
      borderRadius: 2,
    },
    containerColourScheme: {
      alignItems: 'flex-start',
      padding: 12,
      marginBottom: 8,
    },
    containerButton: {
      flexDirection: 'row',
      backgroundColor: isDarkMode ? colors.blue2bg : colors.white2bg,
      margin: 0,
      alignSelf: 'flex-start',
      borderRadius: 40,
      padding: 4,
    },
    buttonLight: {
      backgroundColor: isDarkMode ? colors.blue3bg : colors.white2bg,
    },
    buttonDark: {
      backgroundColor: isDarkMode ? colors.blue2bg : colors.white1bg,
      ...mainStyles.shadow,
    },
    buttonSwitch: {
      paddingVertical: 4,
      paddingRight: 16,
      paddingLeft: 8,
      marginBottom: 0,
      borderRadius: 32,
      width: '36%',
    },
    textLight: {
      fontFamily: 'Inter',
      fontSize: 15,
      color: isDarkMode ? colors.gray5 : colors.gray2,
    },
    textDark: {
      fontFamily: 'Inter',
      fontSize: 15,
      color: isDarkMode ? colors.gray5 : colors.gray2,
    },
  });

export default FooterDarkMode;
