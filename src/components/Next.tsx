import React from 'react';
import {StyleSheet, View} from 'react-native';
import mainStyles from 'config/sharedStyles/mainStyles';
import MyButton from 'components/MyButton';
import BubbleNext from 'assets/images/UI/bubble_next.svg';
import CircleNext from 'assets/images/UI/circle_next.svg';
import MyText from 'components/MyText';

interface PropsType {
  go?: boolean;
  mainColor: string;
  secondColor: string;
  onPress: () => void;
}

const Next: React.FC<PropsType> = ({go, mainColor, secondColor, onPress}) => {
  const styles = createStyles(mainColor, secondColor);

  return (
    <View style={styles.container}>
      <BubbleNext style={styles.bubble} />
      <MyButton
        onPress={onPress}
        style={[styles.bubble, styles.button, go && styles.alignGo]}>
        {go ? (
          <MyText style={styles.goTxt} txt={'GO'} />
        ) : (
          <CircleNext style={styles.circleSvg} />
        )}
      </MyButton>
    </View>
  );
};

const createStyles = (mainColor: string, secondColor: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: secondColor,
      position: 'absolute',
      width: 15,
      height: '120%',
      borderBottomStartRadius: 20,
      right: 0,
    },
    bubble: {position: 'absolute', bottom: 200, left: -45, color: secondColor},
    button: {
      color: mainStyles.lightOrange,
      bottom: 270,
      left: -34,
    },
    alignGo: {
      left: -48,
      width: 80,
      paddingLeft: 0,
      alignItems: 'flex-start',
    },
    goTxt: {
      ...mainStyles.s20BlackBold,
      fontSize: 30,
      color: mainColor,
    },
    circleSvg: {
      color: mainColor,
    },
  });

export default Next;
