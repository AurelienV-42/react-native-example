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

const dataDefault = [
  {
    title: 'Me',
    description: 'Hmmm... But where did I go?',
    svg: <Experiences width={75} height={75} />,
    readingTime: 5,
  },
  {
    title: 'Experiences',
    description: 'Hmmm... But where did I go?',
    readingTime: 5,
    svg: <Experiences width={75} height={75} />,
    backgroundColor: colors.lightOrange,
  },
  {
    title: 'Competencies',
    description: 'Hmmm... But where did I go?',
    readingTime: 5,
    svg: <Competencies width={75} height={75} />,
    backgroundColor: colors.lightGreen,
  },
  {
    title: 'Education',
    description: 'Hmmm... But where did I go?',
    readingTime: 5,
    svg: <Education width={75} height={75} />,
    backgroundColor: colors.lightBlue,
  },
  {
    title: 'Hobbies',
    description: 'Hmmm... But where did I go?',
    readingTime: 5,
    svg: <Hobbies width={75} height={75} />,
    backgroundColor: colors.lightPurple,
  },
  {
    title: 'Trips',
    description: 'Hmmm... But where did I go?',
    readingTime: 5,
    svg: <Trips width={75} height={75} />,
    backgroundColor: colors.lightRed,
  },
];

interface BlogType {
  title: string;
  description: string;
  readingTime: number;
  svg?: React.ReactNode;
  backgroundColor?: string;
}

const BlogList = () => {
  const Item: React.FC<{item: BlogType}> = ({item}) => {
    return (
      <MyButton style={styles.container}>
        <View
          style={[
            styles.illuContainer,
            {
              backgroundColor: item.backgroundColor
                ? item.backgroundColor
                : 'white',
            },
          ]}>
          {item.svg && item.svg}
        </View>
        <View style={styles.centerContainer}>
          <MyText style={styles.titleTxt} txt={item.title} />
          <MyText style={styles.descriptionTxt} txt={item.description} />
        </View>
        <View style={styles.endContainer}>
          <MyText
            style={styles.readingTimeTxt}
            txt={item.readingTime + ' mins'}
          />
        </View>
      </MyButton>
    );
  };

  return (
    <FlatList
      style={styles.listContainer}
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
