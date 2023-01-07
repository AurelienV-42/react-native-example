import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colorStyle from './colorStyle';
import textStyle from './textStyle';

export default {
  ...colorStyle,
  ...textStyle,

  container: {
    flex: 1,
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRow: {
    paddingHorizontal: responsiveWidth(5),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imgFullSize: {
    height: '100%',
    width: '100%',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  shadowLight: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  paddingHorizontal: {paddingHorizontal: responsiveWidth(5)},

  marginBottomUltra: {marginBottom: responsiveHeight(4)},
  marginBottomSuper: {marginBottom: responsiveHeight(3)},
  marginBottom: {marginBottom: responsiveHeight(2)},
  marginBottomLittle: {marginBottom: responsiveHeight(1)},

  loader: {
    position: 'absolute',
    top: responsiveHeight(40),
    alignSelf: 'center',
    zIndex: 1,
  },

  // Icons
  iconBig: {width: 40, height: 40},
  iconDefault: {width: 25, height: 25},
  iconMedium: {width: 20, height: 20},
  iconLittle: {width: 15, height: 15},
  iconSuperLittle: {width: 10, height: 10},
};
