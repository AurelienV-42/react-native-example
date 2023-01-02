import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FooterDarkMode from 'components/FooterDarkMode';

interface PropsType {
  isDarkMode: boolean;
  setDarkMode: (arg0: boolean) => void;
}

const Login: React.FC<PropsType> = ({isDarkMode, setDarkMode}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerWithPadding}>
        <View
          style={{
            flex: 0.8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{color: 'white', fontSize: 50, fontFamily: 'Inter-Black'}}>
            This is a big text to show where the content will be
          </Text>
        </View>
        <FooterDarkMode isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1621',
  },
  containerWithPadding: {
    flex: 1,
    padding: 24,
  },
});

export default Login;
