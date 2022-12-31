import React from 'react';
import { Animated, Image, Pressable, StyleSheet, Text } from "react-native";

const Button = () => {
  const animated = new Animated.Value(1);
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View
        style={[
          styles.button,
          {backgroundColor: '#2277ee', opacity: animated},
        ]}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.buttonText}>Image button</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 36,
  },
  button: {
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    borderRadius: 6,
  },
  buttonText: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default Button;
