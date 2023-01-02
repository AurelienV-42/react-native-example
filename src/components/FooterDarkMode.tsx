import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './Button';
import QuestionMark from 'assets/images/UI/question_info.svg';
import Sun from 'assets/images/UI/sun.svg';
import Moon from 'assets/images/UI/moon.svg';
interface PropsType {
  isDarkMode: boolean;
  setDarkMode: (arg0: boolean) => void;
}

const FooterDarkMode: React.FC<PropsType> = ({isDarkMode, setDarkMode}) => {
  const ColourSchemeInfo = () => {
    return (
      <View>
        <Button
          onPress={() => setDarkMode(!isDarkMode)}
          txt={'Colour Scheme'}
          svg={<QuestionMark height="24" width="24" />}
          isDarkMode={isDarkMode}
        />
      </View>
    );
  };

  const SwitchButtons = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Button svg={<Sun height="24" width="24" />} txt={'Light'} />
        <Button svg={<Moon height="24" width="24" />} txt={'Dark'} />
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

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#333333',
    borderRadius: 2,
  },
});

export default FooterDarkMode;
