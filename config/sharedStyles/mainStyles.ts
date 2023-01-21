import textStyle from './textStyle';
import shadowStyle from 'config/sharedStyles/shadowStyle';
import colors from 'config/sharedStyles/colors';

export default {
  ...textStyle,
  ...shadowStyle,
  ...colors,

  paddingHorizontal: {paddingHorizontal: 24},

  imgFullSize: {
    height: '100%',
    width: '100%',
  },

  // Icons Size
  iconBig: {width: 40, height: 40},
  iconDefault: {width: 25, height: 25},
  iconMedium: {width: 20, height: 20},
  iconLittle: {width: 15, height: 15},
  iconSuperLittle: {width: 10, height: 10},
};
