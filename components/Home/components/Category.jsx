import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ccs from '@assets/core/ccs';
import colors from '@assets/colors';

export default function Category(props) {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const now = parseInt(
    `${year}${month < 10 ? `0${month}` : month}${day < 10 ? `0${day}` : day}`,
  );
  const item = props.item;

  const start = parseInt(item.data.period.start.split('-').join(''));

  const type = props.type;
  return (
    <View
      style={{
        flexDirection: 'row',
        position: type === 'main' ? 'absolute' : undefined,
        top: 0,
        left: 0,
      }}>
      <View
        style={[
          css.categorybox,
          {
            backgroundColor:
              item.state === 'stanby'
                ? 'white'
                : item.state === 'open'
                ? colors.main
                : colors.grey,
            borderWidth: type === 'search' ? 1 : 0,
            borderColor: type === 'search' ? colors.grey3 : 'white',
          },
        ]}>
        <Text
          style={[
            type === 'main' ? ccs.NotoMedium : ccs.NotoBold,
            type === 'main' ? ccs.f_13 : ccs.f_10,
            {
              color:
                item.state === 'stanby'
                  ? colors.main
                  : item.state === 'open'
                  ? 'white'
                  : 'white',
            },
          ]}>
          {item.state === 'stanby'
            ? `D-${now - start}`
            : item.state === 'open'
            ? '오픈'
            : '종료'}
        </Text>
      </View>
      <View
        style={[
          css.categorybox,
          {
            backgroundColor: type === 'main' ? colors.semi_black : colors.grey2,
            borderWidth: type === 'search' ? 1 : 0,
            borderColor: type === 'search' ? colors.grey3 : 'white',
            borderLeftWidth: 0,
          },
        ]}>
        <Text
          style={[
            type === 'main' ? ccs.NotoMedium : ccs.NotoBold,
            type === 'main' ? ccs.f_13 : ccs.f_10,
            type === 'main' ? css.categorytext : {color: colors.grey},
          ]}>
          {item.data.type === 'VIDEO'
            ? '시사회'
            : item.data.type === 'IMAGE'
            ? '전시회'
            : '칼럼'}
        </Text>
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  categorytext: {
    color: 'white',
  },
  categorybox: {
    width: 59,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
