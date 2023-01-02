import React, {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Login from './src/screens/login/login';
const App = () => {
  const [isDarkMode, setDarkMode] = useState(useColorScheme() === 'dark');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Login isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
    </SafeAreaView>
  );
};

export default App;
