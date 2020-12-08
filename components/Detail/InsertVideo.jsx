import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import images from '@assets/images';

export default function InsertVideo(props) {
  const data = props.data;

  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        marginTop: 60,
        height: 220,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('androidfull', {data});
        }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={images.common.play} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
