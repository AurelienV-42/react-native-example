import {responsiveFontSize} from 'react-native-responsive-dimensions';

export default {
  bold: {
    fontFamily: 'Inter-Bold',
  },
  semiBold: {
    fontFamily: 'Inter-SemiBold',
  },
  regular: {
    fontFamily: 'Inter-Regular',
  },

  extraLarge: {
    fontSize: responsiveFontSize(4),
  },
  superLarge: {
    fontSize: responsiveFontSize(3),
  },
  large: {
    fontSize: responsiveFontSize(2.5), // 30
  },
  mediumLarge: {
    fontSize: responsiveFontSize(2.3), // 18
  },
  medium: {
    fontSize: responsiveFontSize(2.1), // 16
  },
  smallMedium: {
    fontSize: responsiveFontSize(1.95), // 15
  },
  small: {
    fontSize: responsiveFontSize(1.8), // 14
  },
  superSmall: {
    fontSize: responsiveFontSize(1.5), // 12
  },
  extraSmall: {
    fontSize: responsiveFontSize(1.2), // 10
  },
};
