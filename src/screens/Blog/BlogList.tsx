import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MyButton from 'components/MyButton';
import colors from 'config/sharedStyles/colors';
import mainStyles from 'config/sharedStyles/mainStyles';
import MyText from 'components/MyText';
import {BlogType} from 'src/screens/Blog/Blog';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import blogConfig from 'config/blog';

type props = {};
type navigationProps = NativeStackNavigationProp<props>;
type RootStackParamList = {
  ReadingScreen?: {id?: number; item?: BlogType};
};

const BlogList: React.FC<navigationProps> = ({}) => {
  const {t} = useTranslation(['blog']);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const Item: React.FC<{item: BlogType}> = ({item}) => {
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
          <MyText style={styles.titleTxt} txt={t(`${item.id}.title`)} />
          <MyText
            style={styles.descriptionTxt}
            txt={t(`${item.id}.description`)}
          />
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
  };

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={blogConfig.blogList}
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
