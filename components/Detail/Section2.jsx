import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  Dimensions,
  Image,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import ccs from '@assets/core/ccs';
import colors from '@assets/colors';
import InputPin from './InputPin';
import {useSelector} from 'react-redux';
import * as Animated from 'react-native-animatable';
import images from '@assets/images';
export default function Section2() {
  const router = useRoute();
  const data = router.params.data;
  const key = router.params.key;
  const layouts = useSelector((state) => state.layouts.detail.is_pin);
  const [KeyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardEnabled, setIsKeyboardEnabled] = useState(false);
  const navigation = useNavigation();
  const [is_btn, setIs_btn] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', (e) => {
      const keyboardHeight = e.endCoordinates.height;

      setKeyboardHeight(keyboardHeight);
      setIsKeyboardEnabled(true);
    });

    Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardHeight(0);
      setIsKeyboardEnabled(false);
    });
    return () => {
      Keyboard.removeAllListeners('keyboardWillShow');
      Keyboard.removeAllListeners('keyboardWillHide');
      Keyboard.dismiss();
    };
  }, []);
  useEffect(() => {
    if (layouts === 'CLEAR') {
      setIs_btn(true);
    } else {
      setIs_btn(false);
    }
    return () => {};
  }, [layouts]);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ImageBackground
          source={{uri: data.data.img}}
          style={{
            height: Dimensions.get('screen').height - 262,
            width: '100%',
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'black',
              position: 'absolute',
              opacity: 0.6,
              bottom: 0,
            }}
          />
          <View
            style={{paddingTop: DeviceInfo.hasNotch() ? 124 : 66, padding: 21}}>
            <Text
              style={[
                ccs.NotoBold,
                ccs.f_23,
                {
                  color: 'white',
                },
              ]}>
              {data.data.title}
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              width: '100%',
              marginTop: 92,
            }}>
            <Image source={images.detail.active_ticket} />
          </View>
        </ImageBackground>
      </View>
      <Animated.View
        transition="bottom"
        duration={1500}
        easing="ease-in-out"
        style={{
          alignItems: 'center',
          paddingTop: 20,
          position: 'absolute',
          width: '100%',
          height: 262,
          bottom: KeyboardHeight,
          backgroundColor: 'white',
        }}>
        <Text
          style={[
            ccs.f_15,
            ccs.NotoMedium,
            {
              color: layouts === 'NOTPIN' ? colors.main : colors.semi_black2,
            },
          ]}>
          {layouts === 'NOTPIN'
            ? '입장코드가 틀렸습니다'
            : '티켓 전면의 입장코드'}
        </Text>
        <Text
          style={[
            ccs.f_15,
            ccs.NotoBold,
            {
              color: layouts === 'NOTPIN' ? colors.main : colors.semi_black2,
            },
          ]}>
          {layouts === 'NOTPIN' ? '다시 확인해주세요' : '6자리를 입력해주세요'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <InputPin pgkey={data.projectKey} reKey={key} />
        </View>
        <View
          style={{
            width: '100%',
            height: DeviceInfo.hasNotch() ? 80 : 60,
            backgroundColor: is_btn ? colors.main : colors.grey3,
            position: 'absolute',
            bottom: 0,
          }}>
          <TouchableOpacity
            onPress={() => {
              if (layouts === 'CLEAR') {
                navigation.navigate('section3', {data});
              }
            }}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={[
                ccs.f_17,
                ccs.NotoBold,
                {
                  color: 'white',
                },
              ]}>
              입장하기
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({});
