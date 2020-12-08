import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import * as Animated from 'react-native-animatable';

import Clipboard from '@react-native-community/clipboard';
import {useRoute, useNavigation} from '@react-navigation/native';
import ccs from '@assets/core/ccs';
import DeviceInfo from 'react-native-device-info';
import images from '@assets/images';
import {useSelector, useDispatch} from 'react-redux';
import colors from '@assets/colors';
export default function Section1() {
  const router = useRoute();
  const data = router.params.data;
  const key = router.params.key;

  const btnlayout = useSelector((state) => state.layouts.detail.btn);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [ready, setReady] = useState(false);
  const __toast = useCallback(() => {
    if (ready === false) {
      setTimeout(() => {
        setReady(false);
      }, 2000);
    }
  }, [ready]);
  useEffect(() => {
    dispatch({
      type: 'TEMPLATES/LIST',
      payload: data.data.templates,
    });
    return () => {};
  }, [data]);

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={{uri: data.data.img}} style={{flex: 1}}>
        <Animated.View
          transition={'top'}
          duration={700}
          easing={'ease-in-out'}
          style={{
            position: 'absolute',
            backgroundColor: colors.main,
            padding: 14,
            paddingLeft: 26,
            paddingRight: 26,
            alignSelf: 'center',
            borderRadius: 5,
            top: ready ? 50 : -200,
            zIndex: 100,
          }}>
          <Text style={[ccs.NotoBold, ccs.f_15, css.categorytext]}>
            메일주소가 복사되었습니다
          </Text>
        </Animated.View>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            position: 'absolute',
            opacity: 0.6,
          }}
        />
        <View
          style={{
            flex: 1,
            padding: 21,
            paddingTop: DeviceInfo.hasNotch() ? 124 : 66,
          }}>
          <Text
            style={[
              ccs.NotoBold,
              ccs.f_23,
              {
                color: 'white',
              },
            ]}>
            {data.title}
          </Text>
          <View
            style={{
              marginTop: 92,
              alignItems: 'center',
              width: '100%',
            }}>
            <Image source={images.detail.deactive_ticket} />
            <Text
              style={[
                ccs.f_15,
                ccs.NotoBold,
                {
                  color: 'white',
                  marginTop: 13.5,
                },
              ]}>
              메일로 티켓을 받으셨습니까?
            </Text>
          </View>

          <View
            style={{
              position: 'absolute',
              width: '100%',
              bottom: 0,
              left: 21,
              bottom: 31,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            {btnlayout.map((item, idx) => {
              return (
                <View
                  key={idx}
                  style={{
                    width: '100%',

                    height: 54,
                    backgroundColor: item.backcolor,
                    marginBottom: idx === 0 ? 10 : 0,
                    borderRadius: 5,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (idx === 0) {
                        navigation.navigate('section2', {data, key});
                      } else {
                        __toast();
                        setReady(true);

                        Clipboard.setString('pq_cs@projectquestion.com');
                      }
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    {idx === 1 ? (
                      <Image
                        style={{marginRight: 5}}
                        source={images.detail.purple_call}
                      />
                    ) : undefined}
                    <Text
                      style={[
                        ccs.NotoMedium,
                        ccs.f_16,
                        {
                          color: item.color,
                        },
                      ]}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const css = StyleSheet.create({
  categorybox: {
    width: 59,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categorytext: {
    color: 'white',
  },
});
