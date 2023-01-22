import React from 'react';
import {StyleSheet, View} from 'react-native';
import mainStyles from 'config/sharedStyles/mainStyles';

interface PropsType {
  step: number;
}

const MyPageIndicator: React.FC<PropsType> = ({step}) => {
  const FilledIndicator = () => (
    <View style={[styles.indicator, styles.filled]} />
  );
  const Indicator = () => <View style={styles.indicator} />;

  return (
    <View style={styles.container}>
      {step === 0 ? <FilledIndicator /> : <Indicator />}
      {step === 1 ? <FilledIndicator /> : <Indicator />}
      {step === 2 ? <FilledIndicator /> : <Indicator />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  indicator: {
    width: 30,
    height: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: mainStyles.gray1,
    marginLeft: 4,
  },
  filled: {backgroundColor: mainStyles.gray1},
});

export default MyPageIndicator;
