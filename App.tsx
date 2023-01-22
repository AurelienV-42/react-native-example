import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import HomeScreen from 'src/screens/Home/HomeScreen';
import colors from 'config/sharedStyles/colors';
import SplashScreen from 'react-native-splash-screen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from 'src/screens/Onboarding/FirstScreen';
import ReadingScreen from 'src/screens/Blog/ReadingScreen';
import SecondScreen from 'src/screens/Onboarding/SecondScreen';
import ThirdScreen from 'src/screens/Onboarding/ThirdScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'} // Or dark-content
        backgroundColor={Colors.lighter} // Or Colors.lighter
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="FirstOnboarding"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="FirstOnboarding" component={FirstScreen} />
          <Stack.Screen name="SecondOnboarding" component={SecondScreen} />
          <Stack.Screen name="ThirdOnboarding" component={ThirdScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ReadingScreen" component={ReadingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteBg,
    flex: 1,
  },
});

export default App;
