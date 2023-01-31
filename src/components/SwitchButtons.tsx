import mainStyles from 'config/sharedStyles/mainStyles';
import {StyleSheet, View} from 'react-native';
import MyButton from 'components/MyButton';
import React, {useState} from 'react';

interface SwitchButtonsProps {
  onPressLeft: () => void;
  onPressRight: () => void;
  svgLeft: React.ReactNode;
  svgRight: React.ReactNode;
  txtLeft: string;
  txtRight: string;
  isRightSelected: boolean;
}

const SwitchButtons: React.FC<SwitchButtonsProps> = ({
  onPressLeft,
  onPressRight,
  svgLeft,
  svgRight,
  txtLeft,
  txtRight,
  isRightSelected,
}) => {
  const [isRight, setRight] = useState(isRightSelected);

  return (
    <View style={styles.containerButton}>
      <MyButton
        onPress={() => {
          isRight && setRight(false);
          onPressLeft();
        }}
        style={[styles.buttonSwitch, !isRight && styles.buttonSelected]}
        svg={svgLeft}
        txt={txtLeft}
        txtStyle={styles.textLeft}
      />
      <MyButton
        onPress={() => {
          !isRight && setRight(true);
          onPressRight();
        }}
        style={[styles.buttonSwitch, isRight && styles.buttonSelected]}
        svg={svgRight}
        txt={txtRight}
        txtStyle={styles.textRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    backgroundColor: mainStyles.white,
    margin: 0,
    alignSelf: 'flex-start',
    borderRadius: 40,
    padding: 4,
    ...mainStyles.shadow,
  },
  buttonSelected: {
    backgroundColor: mainStyles.gray6,
  },
  buttonSwitch: {
    paddingVertical: 8,
    paddingRight: 16,
    paddingLeft: 8,
    marginBottom: 0,
    borderRadius: 32,
    width: '36%',
  },
  textLeft: {
    ...mainStyles.s14Semi,
    color: mainStyles.gray2,
  },
  textRight: {
    ...mainStyles.s14Semi,
    color: mainStyles.gray2,
  },
});

export default SwitchButtons;
