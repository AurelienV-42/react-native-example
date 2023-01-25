import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import mainStyles from 'config/sharedStyles/mainStyles';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Back from 'assets/images/UI/back.svg';
import MyButton from 'components/MyButton';
import {BlogType} from 'src/screens/Blog/Blog';
import MyText from 'components/MyText';
import wordingBlog from 'config/wordingBlog';

type navigationProps = NativeStackScreenProps<{}>;

const ReadingScreen: React.FC<navigationProps> = ({route, navigation}) => {
  const {item}: {item: BlogType} = route.params;
  const styles = createStyles(item.mainColor, item.secondColor);
  let wording = wordingBlog[item.title.toLowerCase()];
  let svg;

  if (item.svg) {
    svg = React.cloneElement(item.littleSvg ? item.littleSvg : item.svg, {
      style: styles.svg,
      width: 200,
      height: 200,
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <MyButton
            style={styles.containerBtn}
            svg={<Back style={styles.colorSvg} height={25} width={14} />}
            onPress={() => navigation.goBack()}
          />
          <MyText style={styles.titleHeader} txt={item.title + '.'} />
          <MyText
            style={styles.secondHeader}
            txt={item.readingTime + ' mins'}
          />
        </View>
        {svg && svg}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerBlog}
        contentContainerStyle={styles.scrollViewPadding}>
        {wording?.map((word, index) => (
          <View key={index}>
            {word.h1 && <MyText style={styles.titleTxt} txt={word.h1} />}
            {word.h2 && <MyText style={styles.subTitleTxt} txt={word.h2} />}
            {word.p && <MyText style={styles.bodyTxt} txt={word.p} />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const createStyles = (mainColor?: string, secondColor?: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      backgroundColor: secondColor,
    },
    headerContainer: {
      paddingTop: 40,
      paddingLeft: 24,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      width: '100%',
    },
    containerBtn: {
      marginTop: 44,
      marginBottom: 24,
      padding: 0,
      justifyContent: 'flex-start',
      alignSelf: 'flex-start',
    },
    colorSvg: {color: mainStyles.gray1},
    titleHeader: {
      ...mainStyles.s20Semi,
      fontSize: 26,
      marginBottom: 42,
    },
    secondHeader: {
      ...mainStyles.s16Medium,
      marginBottom: 20,
    },
    containerBlog: {
      width: '100%',
      backgroundColor: mainStyles.white,
      paddingHorizontal: 24,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      ...mainStyles.shadow,
    },
    scrollViewPadding: {
      paddingBottom: 60,
    },
    titleTxt: {
      ...mainStyles.s20Semi,
      fontSize: 22,
      marginTop: 30,
    },
    subTitleTxt: {
      ...mainStyles.s16Semi,
      marginTop: 20,
    },
    bodyTxt: {
      ...mainStyles.s14Medium,
      marginTop: 10,
    },
    svg: {
      color: mainColor,
      transform: [{scaleX: -1}],
    },
  });

export default ReadingScreen;
