import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './Button';

const FooterDarkMode = () => {
  const ColourSchemeInfo = () => {
    return (
      <View>
        <Button />
        <Text>Dark Mode</Text>
      </View>
    );
  };

  const SwitchButtons = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Button />
        <Button />
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
    height: 1,
    backgroundColor: 'white',
  },
});

export default FooterDarkMode;
