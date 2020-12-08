import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Swiper from "react-native-swiper";
import ccs from "@assets/core/ccs";
import colors from "@assets/colors";

export default function GalleryDetail() {
  const data = useSelector((state) => state.layouts.home.detail.content);
  const [layout, setLayout] = useState([]);
  useEffect(() => {
    let arr = [];
    data.map((item, idx) => {
      if (item.type === "INSERT_GALLERY") {
        arr.push(item);
      }
    });
    setLayout(arr);
    return () => {};
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Swiper showsPagination={false} loop={false} height={"100%"}>
        {layout.map((item, idx) => {
          return (
            <View key={idx} style={{ flex: 1, paddingBottom: 54 }}>
              <Image
                resizeMode={"contain"}
                source={{ uri: item.content.img }}
                style={{ width: "100%", height: 375 }}
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
                    {idx + 1}/{layout.length}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </Swiper>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
