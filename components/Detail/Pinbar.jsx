import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '@assets/colors';

export default function Pinbar(props) {
  const bool = props.bool;
  return (
    <View
      style={{
        height: 2,
        width: '100%',
        backgroundColor: bool ? colors.main : colors.grey,
      }}></View>
  );
}

const styles = StyleSheet.create({});
