import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface PropsType {
  isDarkMode?: boolean;
  onPress?: () => void;
  style?: {};
  imgSource?: {};
  imgStyle?: {};
  txt?: string;
  txtStyle?: {};
  svg?: React.ReactNode;
  children?: React.ReactNode;
}

const Button: React.FC<PropsType> = ({
  isDarkMode,
  onPress,
  style,
  imgSource,
  imgStyle,
  txt,
  txtStyle,
  svg,
  children,
}) => {
  const [isPressed, setPressed] = useState(false);
  const styles = createStyles(!!isDarkMode, isPressed);

  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}>
      {svg && svg}
      {
        //TODO https://stackoverflow.com/questions/28916768/how-can-i-add-properties-to-a-react-component-passed-as-a-variable
      }
      {imgSource && (
        <Image style={[styles.tinyLogo, imgStyle]} source={imgSource} />
      )}
      {txt && <Text style={[styles.buttonText, txtStyle]}>{txt}</Text>}
      {children && children}
    </Pressable>
  );
};

const createStyles = (isDarkMode: boolean, isPressed: boolean) =>
  StyleSheet.create({
    button: {
      opacity: isPressed ? 0.5 : 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
      flexDirection: 'row',
      borderRadius: 6,
    },
    buttonText: {
      marginLeft: 8,
      fontSize: 20,
      color: isDarkMode ? Colors.white : Colors.black,
    },
    tinyLogo: {
      width: 24,
      height: 24,
    },
  });

export default Button;
