import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ccs from "@assets/core/ccs";
import colors from "@assets/colors";

import Category from "./Category";
import { useNavigation } from "@react-navigation/native";
export default function HomeList() {
  const dispatch = useDispatch();
  const layouts = useSelector((state) => state.layouts.home.list);
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 24,
        flex: 1,
      }}
    >
      <FlatList
        data={layouts}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          let data = item.data;
          let key = item.key;
          return (
            <TouchableOpacity
              onPress={() => {
                if (data.state === "end") {
                  dispatch({
                    type: "SHOW/TOAST",
                    payload: {
                      isActive: true,
                      msg: "종료된 전시로 입장이 불가합니다",
                    },
                  });
                } else if (data.state === "stanby") {
                  dispatch({
                    type: "SHOW/TOAST",
                    payload: {
                      isActive: true,
                      msg: "현재 오픈 전 전시입니다. 조금만 기다려주세요 :)",
                    },
                  });
                } else if (data.state === "open") {
                  navigation.navigate("section1", {
                    data: data,
                    key: key,
                  });
                }
              }}
            >
              <ImageBackground
                source={{ uri: data.data.img }}
                style={{
                  width: "100%",
                  height: 227,
                  marginBottom: 6,
                }}
              >
                <View
                  style={{
                    backgroundColor: colors.semi_black,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: 0.6,
                  }}
                />
                <View
                  style={{
                    padding: 20,
                    paddingTop: 117,
                  }}
                >
                  <Category item={data} type={"main"} />
                  <View>
                    <Text style={[ccs.NotoBold, ccs.f_19, css.categorytext]}>
                      {data.data.title}
                    </Text>
                  </View>
                </View>
                <Text
                  style={[
                    ccs.NotoMedium,
                    ccs.f_13,
                    css.categorytext,
                    {
                      position: "absolute",
                      bottom: 21,
                      left: 22,
                    },
                  ]}
                >
                  {data.data.name}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const css = StyleSheet.create({
  categorybox: {
    width: 59,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  categorytext: {
    color: "white",
  },
});
