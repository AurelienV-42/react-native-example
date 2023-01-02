import React from 'react';
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
}) => {
  const styles = createStyles(!!isDarkMode);

  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      {svg && svg}
      {
        //TODO https://stackoverflow.com/questions/28916768/how-can-i-add-properties-to-a-react-component-passed-as-a-variable
      }
      {imgSource && (
        <Image style={[styles.tinyLogo, imgStyle]} source={imgSource} />
      )}
      {txt && <Text style={[styles.buttonText, txtStyle]}>{txt}</Text>}
    </Pressable>
  );
};

const createStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
      marginBottom: 12,
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
