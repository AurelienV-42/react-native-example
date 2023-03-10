import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

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
import LoadingScreen from 'src/screens/LoadingScreen';

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
          initialRouteName="Loading"
          screenOptions={{
            animation: 'slide_from_right',
            headerShown: false,
          }}>
          <Stack.Screen
            name="FirstOnboarding"
            component={FirstScreen}
            options={{gestureEnabled: false}}
          />
          <Stack.Screen
            name="SecondOnboarding"
            component={SecondScreen}
            options={{gestureEnabled: false}}
          />
          <Stack.Screen
            name="ThirdOnboarding"
            component={ThirdScreen}
            options={{gestureEnabled: false}}
          />
          <Stack.Screen name="Loading" component={LoadingScreen} />
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
