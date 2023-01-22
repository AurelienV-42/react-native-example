import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import colors from 'config/sharedStyles/colors';
import textStyle from 'config/sharedStyles/textStyle';
import Settings from 'assets/images/UI/settings.svg';
import mainStyles from 'config/sharedStyles/mainStyles';
import MyButton from 'components/MyButton';
import BlogList from 'src/screens/Blog/BlogList';
import MyText from 'components/MyText';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type navigationProps = NativeStackScreenProps<{}>;

const HomeScreen: React.FC<navigationProps> = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerWithPadding}>
        <View style={styles.containerHeader}>
          <MyText style={styles.logoText} txt={'Aurél.'} />
          <MyButton
            style={styles.containerBtn}
            svg={
              <Settings
                style={{color: mainStyles.gray1}}
                height={20}
                width={20}
              />
            }
          />
        </View>

        <View style={styles.containerContent}>
          <BlogList route={route} navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  containerWithPadding: {
    flex: 1,
  },
  containerHeader: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
  },
  logoText: {
    ...textStyle.s20BlackBold,
    fontSize: 60, // 18
  },
  containerBtn: {
    backgroundColor: mainStyles.white,
    padding: 10,
    borderRadius: 50,
    ...mainStyles.shadow,
  },
  containerContent: {justifyContent: 'center', flex: 0.9},
});

export default HomeScreen;
