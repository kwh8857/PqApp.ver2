import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ccs from '@assets/core/ccs';

export default function TextTitle(props) {
  const data = props.data;

  return (
    <View
      style={{paddingLeft: 22, paddingRight: 22, width: '100%', marginTop: 35}}>
      <Text style={[ccs.NotoBold, ccs.f_16]}>{data.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
