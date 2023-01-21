import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import HomeScreen from 'src/screens/Home/HomeScreen';
import colors from 'config/sharedStyles/colors';
import SplashScreen from 'react-native-splash-screen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'} // Or dark-content
        backgroundColor={Colors.lighter} // Or Colors.lighter
      />
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: '5%',
    backgroundColor: colors.whiteBg,
    flex: 1,
  },
});

export default App;
