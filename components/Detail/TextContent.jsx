import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ccs from '@assets/core/ccs';

export default function TextContent(props) {
  const data = props.data;
  return (
    <View
      style={{
        paddingLeft: 22,
        paddingRight: 22,
        marginTop: 8,
      }}>
      <Text style={[ccs.NotoRegular, ccs.f_16]}>{data.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
