import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FooterDarkMode from 'components/FooterDarkMode';

interface PropsType {
  isDarkMode: boolean;
}

const Login: React.FC<PropsType> = ({isDarkMode}) => {
  console.log(isDarkMode);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 0.8,
          padding: 30,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(199,190,190,0.3)',
        }}>
        <Text style={{color: 'white', fontSize: 50, fontFamily: 'Inter-Black'}}>
          This is a big text to show where the content will be
        </Text>
      </View>
      <FooterDarkMode />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#0F1621',
  },
});

export default Login;
