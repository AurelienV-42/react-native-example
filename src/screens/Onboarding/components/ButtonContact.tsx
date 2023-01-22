import React from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import mainStyles from 'config/sharedStyles/mainStyles';
import MyText from 'components/MyText';
import MyButton from 'components/MyButton';

interface PropsType {
  backgroundColor: string;
  svg?: React.ReactNode;
  txt: string;
  url: string;
}

const ButtonContact: React.FC<PropsType> = ({
  url,
  backgroundColor,
  svg,
  txt,
}) => {
  const styles = createOnboardingStyles(backgroundColor);

  return (
    <View style={styles.containerAbsolute}>
      <MyButton onPress={() => Linking.openURL(url)} style={[styles.container]}>
        {svg && svg}
        <MyText style={[styles.defaultTxt]} txt={txt} />
      </MyButton>
    </View>
  );
};

const createOnboardingStyles = (backgroundColor: string) =>
  StyleSheet.create({
    containerAbsolute: {
      position: 'absolute',
      top: 88,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      backgroundColor: backgroundColor,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingLeft: 24,
      paddingRight: 32,
      flexDirection: 'row',
    },
    defaultTxt: {
      marginLeft: 20,
      ...mainStyles.s20Semi,
    },
  });

export default ButtonContact;
