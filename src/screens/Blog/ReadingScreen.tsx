import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import colors from 'config/sharedStyles/colors';
import mainStyles from 'config/sharedStyles/mainStyles';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Settings from 'assets/images/UI/settings.svg';
import MyButton from 'components/MyButton';
import {BlogType} from 'src/screens/Blog/Blog';

type navigationProps = NativeStackScreenProps<{}>;

const ReadingScreen: React.FC<navigationProps> = ({route, navigation}) => {
  const {item}: {item: BlogType} = route.params;

  console.log(item.title);
  return (
    <SafeAreaView style={styles.container}>
      <MyButton
        style={styles.containerBtn}
        svg={<Settings height={20} width={20} />}
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
  },
  containerBtn: {
    backgroundColor: mainStyles.white,
    padding: 10,
    borderRadius: 50,
    ...mainStyles.shadow,
  },
});

export default ReadingScreen;
