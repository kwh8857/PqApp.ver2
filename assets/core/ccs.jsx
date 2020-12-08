import {StyleSheet, Platform} from 'react-native';

const autoLineHeight = (platform, fontsize) => {
  return platform === 'android' ? fontsize * 1.45 : undefined;
};

const ccs = StyleSheet.create({
  NotoMedium: {
    fontFamily: 'NotoSansKR-Medium',
  },
  NotoRegular: {
    fontFamily: 'NotoSansKR-Regular',
  },
  NotoBold: {
    fontFamily: 'NotoSansKR-Bold',
  },
  f_10: {
    fontSize: 10,
    lineHeight: autoLineHeight(Platform.OS, 10),
  },
  f_11: {
    fontSize: 11,
    lineHeight: autoLineHeight(Platform.OS, 11),
  },
  f_12: {
    fontSize: 12,
    lineHeight: autoLineHeight(Platform.OS, 12),
  },
  f_13: {
    fontSize: 13,
    lineHeight: autoLineHeight(Platform.OS, 13),
  },
  f_14: {
    fontSize: 14,
    lineHeight: autoLineHeight(Platform.OS, 14),
  },
  f_15: {
    fontSize: 15,
    lineHeight: autoLineHeight(Platform.OS, 15),
  },
  f_16: {
    fontSize: 16,
    lineHeight: autoLineHeight(Platform.OS, 16),
  },
  f_17: {
    fontSize: 17,
    lineHeight: autoLineHeight(Platform.OS, 17),
  },
  f_18: {
    fontSize: 18,
    lineHeight: autoLineHeight(Platform.OS, 18),
  },
  f_19: {
    fontSize: 19,
    lineHeight: autoLineHeight(Platform.OS, 19),
  },
  f_20: {
    fontSize: 20,
    lineHeight: autoLineHeight(Platform.OS, 20),
  },
  f_21: {
    fontSize: 21,
    lineHeight: autoLineHeight(Platform.OS, 21),
  },
  f_22: {
    fontSize: 22,
    lineHeight: autoLineHeight(Platform.OS, 22),
  },
  f_23: {
    fontSize: 23,
    lineHeight: autoLineHeight(Platform.OS, 23),
  },
  f_24: {
    fontSize: 24,
    lineHeight: autoLineHeight(Platform.OS, 24),
  },
  f_25: {
    fontSize: 25,
    lineHeight: autoLineHeight(Platform.OS, 25),
  },
  f_35: {
    fontSize: 35,
    lineHeight: autoLineHeight(Platform.OS, 35),
  },
});

export default ccs;
