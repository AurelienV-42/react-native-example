import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MyButton from 'components/MyButton';

import Experiences from 'assets/images/illustrations/experiencies.svg';
import Competencies from 'assets/images/illustrations/competencies.svg';
import CV from 'assets/images/illustrations/CV.svg';
import Education from 'assets/images/illustrations/education.svg';
import Hobbies from 'assets/images/illustrations/hobbies.svg';
import Trips from 'assets/images/illustrations/trips.svg';
import colors from 'config/sharedStyles/colors';
import mainStyles from 'config/sharedStyles/mainStyles';
import MyText from 'components/MyText';
import {BlogType} from 'src/screens/Blog/Blog';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import wordingBlog from 'config/wordingBlog';

const dataDefault = [
  {
    title: 'Me',
    svg: (
      <Experiences style={{color: mainStyles.orange}} width={75} height={75} />
    ),
  },
  {
    title: 'Experiences',
    description:
      "Let's see what I've done with the 15+ companies I've worked for",
    readingTime: 10,
    svg: (
      <Experiences style={{color: mainStyles.orange}} width={75} height={75} />
    ),
    mainColor: colors.orange,
    secondColor: colors.lightOrange,
  },
  {
    title: 'Competencies',
    description: 'I know how to do things, and not only development!',
    readingTime: 8,
    svg: (
      <Competencies style={{color: mainStyles.green}} width={75} height={75} />
    ),
    littleSvg: <CV />,
    mainColor: colors.green,
    secondColor: colors.lightGreen,
  },
  {
    title: 'Education',
    description: 'Epitech, yes but what did I do there?',
    readingTime: 2,
    svg: <Education style={{color: mainStyles.blue}} width={75} height={75} />,
    mainColor: colors.blue,
    secondColor: colors.lightBlue,
  },
  {
    title: 'Hobbies',
    description: 'What I like to do in my life?',
    readingTime: 2,
    svg: <Hobbies style={{color: mainStyles.purple}} width={75} height={75} />,
    mainColor: colors.purple,
    secondColor: colors.lightPurple,
  },
  {
    title: 'Trips',
    description: 'Hmm... But where did I go?',
    svg: <Trips style={{color: mainStyles.red}} width={75} height={75} />,
    mainColor: colors.red,
    secondColor: colors.lightRed,
  },
];

type props = {};
type navigationProps = NativeStackNavigationProp<props>;
type RootStackParamList = {
  ReadingScreen?: {id?: number; item?: BlogType};
};

const BlogList: React.FC<navigationProps> = ({}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const Item: React.FC<{item: BlogType}> = ({item}) => {
    if (item.title.toLowerCase() in wordingBlog) {
      return (
        <MyButton
          style={styles.container}
          onPress={() => navigation.push('ReadingScreen', {item})}>
          <View
            style={[
              styles.illuContainer,
              {
                backgroundColor: item.secondColor ? item.secondColor : 'white',
              },
            ]}>
            {item.svg && item.svg}
          </View>
          <View style={styles.centerContainer}>
            <MyText style={styles.titleTxt} txt={item.title} />
            <MyText style={styles.descriptionTxt} txt={item.description} />
          </View>
          <View style={styles.endContainer}>
            {item.readingTime && (
              <MyText
                style={styles.readingTimeTxt}
                txt={item.readingTime + ' mins'}
              />
            )}
          </View>
        </MyButton>
      );
    }
  };

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={dataDefault}
      renderItem={Item}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {padding: 24},
  container: {
    marginBottom: 10,
    ...mainStyles.shadow,
    backgroundColor: colors.white,
    padding: 0,
    marginLeft: 0,
    borderRadius: 20,
    alignItems: 'flex-start',
  },
  illuContainer: {padding: 8, borderRadius: 20},
  centerContainer: {padding: 12, flex: 0.8},
  endContainer: {
    padding: 12,
    alignSelf: 'flex-end',
    alignItems: 'center',
    flex: 0.2,
  },
  titleTxt: {...mainStyles.s14Semi, marginBottom: 8},
  descriptionTxt: {...mainStyles.s10Medium},
  readingTimeTxt: {...mainStyles.s10Medium},
});
export default BlogList;
