import React, {useState} from 'react';
import {LogBox, SafeAreaView, StyleSheet, View} from 'react-native';
import colors from 'config/sharedStyles/colors';
import textStyle from 'config/sharedStyles/textStyle';
import mainStyles from 'config/sharedStyles/mainStyles';
import MyButton from 'components/MyButton';
import BlogList from 'src/screens/Blog/BlogList';
import MyText from 'components/MyText';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import SettingsModal from 'src/screens/Home/components/Settings';
import ContactModal from 'src/screens/Home/components/Contact';
import images from 'assets/index';
import Settings from 'assets/images/UI/settings.svg';

type navigationProps = NativeStackScreenProps<{}>;

const HomeScreen: React.FC<navigationProps> = ({route, navigation}) => {
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [contactModalVisible, setContactModalVisible] = useState(false);

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerWithPadding}>
        <View style={styles.containerHeader}>
          <MyText style={styles.logoText} txt={'Aurél.'} />
          <MyButton
            onPress={() => setSettingsModalVisible(true)}
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
      <MyButton
        onPress={() => setContactModalVisible(true)}
        style={styles.ctaContact}
        imgSource={images.letter}
        imgStyle={styles.ctaImg}
      />

      <SettingsModal
        isVisible={settingsModalVisible}
        onClose={() => setSettingsModalVisible(false)}
      />
      <ContactModal
        isVisible={contactModalVisible}
        onClose={() => setContactModalVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightOrange,
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
    fontSize: 60,
  },
  containerBtn: {
    backgroundColor: mainStyles.white,
    padding: 10,
    borderRadius: 50,
    ...mainStyles.shadow,
  },
  containerContent: {
    justifyContent: 'center',
    flex: 0.9,
  },
  ctaContact: {
    position: 'absolute',
    backgroundColor: mainStyles.white,
    right: 20,
    bottom: 52,
    padding: 16,
    borderRadius: 50,
    ...mainStyles.shadow,
  },
  ctaImg: {
    width: 34,
    height: 34,
  },
});

export default HomeScreen;
