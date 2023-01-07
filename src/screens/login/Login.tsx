import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FooterDarkMode from 'components/FooterDarkMode';
import LogoDark from 'assets/images/logo/logo_dark.svg';
import LogoLight from 'assets/images/logo/logo_light.svg';
import Button from 'components/Button';
import images from 'assets/index';
import colors from 'config/sharedStyles/colors';
interface PropsType {
  isDarkMode: boolean;
  setDarkMode: (arg0: boolean) => void;
}

const Login: React.FC<PropsType> = ({isDarkMode, setDarkMode}) => {
  const styles = createStyles(isDarkMode);

  const Content = () => {
    return (
      <View style={styles.containerContent}>
        <Text style={styles.stayConnectedText}>Stay connected with</Text>
        <Button style={styles.buttonProfile} isDarkMode={isDarkMode}>
          <Image
            style={styles.imageProfile}
            resizeMode="contain"
            source={images.default_picture}
          />
          <View style={styles.containerTxtProfile}>
            <Text style={styles.txtNameProfile}>Aurélien Vandaële</Text>
            <Text style={styles.txtMailProfile}>aurelienvpro@gmail.com</Text>
          </View>
        </Button>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerWithPadding}>
        <View style={styles.containerHeader}>
          {isDarkMode ? <LogoLight width="245" /> : <LogoDark width="245" />}
        </View>
        <Content />
        <FooterDarkMode isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      </View>
    </SafeAreaView>
  );
};

const createStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    colorSvg: {
      color: isDarkMode ? colors.gray4 : colors.gray2,
    },
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? colors.blue1bg : colors.white,
    },
    containerWithPadding: {
      flex: 1,
      padding: 24,
    },
    containerHeader: {
      flex: 0.1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerContent: {justifyContent: 'center', flex: 0.8},
    stayConnectedText: {
      fontFamily: 'Inter',
      fontWeight: '600',
      fontSize: 20,
      marginBottom: 8,
      color: isDarkMode ? colors.gray6 : colors.gray1,
    },
    buttonProfile: {
      justifyContent: 'flex-start',
      backgroundColor: isDarkMode ? colors.blue1bg : colors.white2bg,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: isDarkMode ? colors.grayBlue : colors.gray4,
    },
    imageProfile: {
      backgroundColor: '#ffd88d',
      borderRadius: 48,
      width: 48,
      height: 48,
    },
    containerTxtProfile: {paddingLeft: 12},
    txtNameProfile: {
      fontFamily: 'Inter',
      fontWeight: '600',
      fontSize: 15,
      color: isDarkMode ? colors.gray6 : colors.gray1,
    },
    txtMailProfile: {
      fontFamily: 'Inter',
      fontSize: 12,
      color: isDarkMode ? colors.gray6 : colors.gray1,
    },
  });

export default Login;
