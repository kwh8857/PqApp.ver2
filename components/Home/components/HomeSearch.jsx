import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ccs from '@assets/core/ccs';
import colors from '@assets/colors';
import images from '@assets/images';
import {useNavigation} from '@react-navigation/native';

export default function HomeSearch() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingLeft: 22,
        paddingRight: 22,
      }}>
      <Text
        style={[
          ccs.NotoBold,
          ccs.f_23,
          {
            color: colors.semi_black,
          },
        ]}>{`내가 후원한
프로젝트를 찾아보세요`}</Text>
      <View
        style={{
          position: 'absolute',
          right: 22,
          width: 56,
          height: 56,
          backgroundColor: 'white',
          borderRadius: 56,
          bottom: 0,
          elevation: 8,
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.2,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('homesearch');
          }}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={images.home.home_search} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
