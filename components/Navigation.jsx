import React from 'react';
import {View, Text, Image, Platform, TouchableOpacity} from 'react-native';
import Home from './Home/Home';

import images from '@assets/images';
import {createStackNavigator} from '@react-navigation/stack';

import SearchDetail from './Home/components/SearchDetail';
import Section1 from './Detail/Section1';
import Section2 from './Detail/Section2';
import Section3 from './Detail/Section3';
import GalleryDetail from './Detail/GalleryDetail';
import ccs from '@assets/core/ccs';
import {useSelector} from 'react-redux';
import Full from './Detail/Full';
import * as Rootnavigation from './navigation/Rootnavigation';
import SlideDetail from './Detail/SlideDetail';
export default function Navigation() {
  const is_back = useSelector((state) => state.layouts.header.is_back);
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleContainerStyle:
          Platform.OS === 'android'
            ? {
                position: 'absolute',
                left: 0,
                width: '100%',

                zIndex: 0,
              }
            : '',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerBackTitleVisible: false,
        headerTitle: () => {
          return <View />;
        },
        headerBackImage: () => {
          return (
            <Image
              style={{
                marginLeft: Platform.OS === 'ios' ? 15 : 0,
                zIndex: 10,
              }}
              source={images.common.back}
            />
          );
        },
      }}
      initialRouteName="home">
      <Stack.Screen
        component={Home}
        name="home"
        options={{
          headerTitle: false,
          headerLeft: () => {
            return (
              <View
                style={{
                  marginLeft: 24.3,
                }}>
                <Image source={images.home.home_logo} />
              </View>
            );
          },
        }}
      />
      <Stack.Screen component={SearchDetail} name="homesearch" />
      <Stack.Screen
        component={Section1}
        name="section1"
        options={{
          headerTransparent: true,

          headerBackImage: () => {
            return (
              <Image
                style={{marginLeft: Platform.OS === 'ios' ? 15 : 3}}
                source={images.common.white_back}
              />
            );
          },
        }}
      />

      <Stack.Screen
        component={Section2}
        name="section2"
        options={{
          headerTransparent: true,

          headerBackImage: () => {
            return (
              <Image
                style={{marginLeft: Platform.OS === 'ios' ? 15 : 3}}
                source={images.common.white_back}
              />
            );
          },
        }}
      />
      <Stack.Screen
        component={Section3}
        name="section3"
        options={{
          headerTransparent: is_back ? false : true,

          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{left: 15, zIndex: 10}}
                onPress={() => {
                  Rootnavigation.navigate('home');
                }}>
                <Image
                  style={{
                    marginLeft: Platform.OS === 'ios' ? 0 : 0,
                  }}
                  source={
                    is_back ? images.common.back : images.common.white_back
                  }
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        component={GalleryDetail}
        name="galleryDetail"
        options={{
          headerTitle: () => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={[ccs.NotoBold, ccs.f_14]}>상세보기</Text>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={Full}
        name="androidfull"
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={SlideDetail}
        name="slidedetail"
        options={{
          headerTransparent: true,
          headerTitle: () => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    ccs.NotoBold,
                    ccs.f_14,
                    {
                      color: 'white',
                    },
                  ]}>
                  상세보기
                </Text>
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
