import React, {useState} from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import textStyle from 'config/sharedStyles/textStyle';
import colors from 'config/sharedStyles/colors';
import MyText from 'components/MyText';

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

const MyButton: React.FC<PropsType> = ({
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
        <Image
          style={[styles.tinyLogo, imgStyle]}
          source={imgSource}
          resizeMode={'contain'}
        />
      )}
      {txt && <MyText style={[styles.buttonText, txtStyle]} txt={txt} />}
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
      ...textStyle.s16Semi,
      marginLeft: 8,
      color: isDarkMode ? colors.gray4 : colors.gray2,
    },
    tinyLogo: {
      width: 24,
      height: 24,
    },
  });

export default MyButton;
