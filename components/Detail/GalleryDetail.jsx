import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Swiper from "react-native-swiper";
import ccs from "@assets/core/ccs";
import colors from "@assets/colors";
export default function GalleryDetail() {
  const data = useSelector((state) => state.layouts.home.detail.content);
  const filter = data.filter((item) => item.type === "INSERT_GALLERY");
  const [idX, setIdX] = useState(0);
  const [isX, setIsX] = useState(0);
  const __updateIdx = useCallback(
    (e) => {
      setIsX(e.nativeEvent.contentOffset.x);
      if (isX !== e.nativeEvent.contentOffset.x) {
        if (isX - e.nativeEvent.contentOffset.x < 1) {
          setIdX(idX + 1);
        } else {
          setIdX(idX - 1);
        }
      }
    },
    [idX, isX]
  );
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <Swiper
        showsPagination={false}
        loop={false}
        height={"100%"}
        onMomentumScrollEnd={__updateIdx}
      >
        {data.map((item, idx) => {
          if (item.type === "INSERT_GALLERY") {
            return (
              <View
                key={idx}
                style={{ height: "100%", width: "100%", paddingBottom: 54 }}
              >
                <Image
                  resizeMode={"contain"}
                  source={{ uri: item.content.img }}
                  style={{ width: "100%", height: 412 }}
                />
                <View
                  style={{
                    marginTop: 19,
                    paddingLeft: 22,
                    paddingRight: 22,
                  }}
                >
                  <Text style={[ccs.NotoBold, ccs.f_18]}>
                    {item.content.title}
                  </Text>
                  <Text
                    style={[
                      ccs.NotoRegular,
                      ccs.f_16,
                      {
                        marginTop: 7,
                      },
                    ]}
                  >
                    {item.content.sub}
                  </Text>
                </View>
              </View>
            );
          }
        })}
      </Swiper>
      <View
        style={{
          alignItems: "center",
          marginTop: 54,
        }}
      >
        <View
          style={{
            backgroundColor: colors.grey6,
            width: 80,
            height: 33,
            borderRadius: 20,
            marginBottom: 50,
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
            {idX + 1}/{filter.length}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
