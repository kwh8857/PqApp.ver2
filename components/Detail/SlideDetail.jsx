import React, { useState, useCallback, useRef, useEffect } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import ccs from "@assets/core/ccs";
import colors from "@assets/colors";
import { useRoute } from "@react-navigation/native";
import DeviceInfo from "react-native-device-info";
import { useSelector, useDispatch } from "react-redux";
export default function SlideDetail() {
  const route = useRoute();
  const dispatch = useDispatch();
  const data = route.params.data;
  const idx = useSelector((state) => state.layouts.slide);
  const [isX, setIsX] = useState(0);
  const __updateIdx = useCallback(
    (e) => {
      setIsX(e.nativeEvent.contentOffset.x);
      console.log(e.nativeEvent);
      if (isX !== e.nativeEvent.contentOffset.x) {
        if (isX - e.nativeEvent.contentOffset.x < 1) {
          dispatch({
            type: "SLIDE/UPDATE",
            payload: idx + 1,
          });
        } else {
          dispatch({
            type: "SLIDE/UPDATE",
            payload: idx - 1,
          });
        }
      }
    },
    [idx, isX, dispatch]
  );
  useEffect(() => {
    return () => {
      dispatch({
        type: "SLIDE/UPDATE",
        payload: 1,
      });
    };
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20%",
      }}
    >
      <Swiper
        showsPagination={false}
        loop={false}
        onMomentumScrollEnd={__updateIdx}
      >
        {data.map((item, idx) => {
          return (
            <View
              key={idx}
              style={{
                width: "100%",

                maxHeight: 500,
              }}
            >
              <Image
                resizeMode={"contain"}
                source={{ uri: item }}
                style={{
                  width: Dimensions.get("screen").width,
                  height: "100%",
                }}
              />
            </View>
          );
        })}
      </Swiper>
      <View
        style={{
          alignItems: "center",
          bottom: 27,
          position: "absolute",
        }}
      >
        <View
          style={{
            backgroundColor: colors.grey6,
            width: 80,
            height: 33,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              ccs.NotoBold,
              ccs.f_17,
              {
                color: colors.grey,
              },
            ]}
          >
            {idx}/{data.length}
          </Text>
        </View>
      </View>
    </View>
  );
}
