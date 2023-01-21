import React from 'react';
import {StyleSheet, Text} from 'react-native';
import mainStyles from 'config/sharedStyles/mainStyles';

interface PropsType {
  style?: {};
  txt?: string;
}

const MyText: React.FC<PropsType> = ({style, txt}) => {
  return <Text style={[styles.text, style]}>{txt && txt}</Text>;
};

const styles = StyleSheet.create({
  text: {...mainStyles.s12Medium, color: mainStyles.gray1},
});

export default MyText;
