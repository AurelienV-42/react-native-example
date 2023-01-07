import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Login from 'src/screens/login/Login';
import colors from 'config/sharedStyles/colors';
const App = () => {
  const [isDarkMode, setDarkMode] = useState(useColorScheme() === 'dark');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = createStyles(isDarkMode);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Login isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
    </SafeAreaView>
  );
};

const createStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? colors.blue1bg : colors.white,
      flex: 1,
    },
  });

export default App;
