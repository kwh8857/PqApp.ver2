import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ccs from "@assets/core/ccs";
import Category from "./Category";
import colors from "@assets/colors";
import * as Animated from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
export default function SearchList(props) {
  const item = props.data;
  const key = props.RdKey;
  const title = item.data.title.replace("\n", "");
  const search = props.search;
  const dispatch = useDispatch();
  const idx = title.indexOf(search);
  const [content, setContent] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    let arr = [];
    Promise.all(
      item.data.templates.map((item, idx) => {
        if (item.type === "TEXT_CONTENT") {
          arr.push(item);
        }
      })
    ).then(() => {
      if (arr.length !== 0) {
        setContent(arr[0].content);
      }
    });

    return () => {};
  }, []);
  return (
    <Animated.View
      animation="fadeIn"
      style={{
        width: "100%",
        height: 172,
        backgroundColor: "white",
        marginBottom: 1,
        padding: 20,
        paddingTop: 22.5,
        paddingBottom: 50,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          if (item.state === "end") {
            dispatch({
              type: "SHOW/TOAST",
              payload: {
                isActive: true,
                msg: "종료된 전시로 입장이 불가합니다",
              },
            });
          } else if (item.state === "stanby") {
            dispatch({
              type: "SHOW/TOAST",
              payload: {
                isActive: true,
                msg: "현재 오픈 전 전시입니다. 조금만 기다려주세요 :)",
              },
            });
          } else if (item.state === "open") {
            navigation.navigate("section1", {
              data: item,
              key: key,
            });
          }
        }}
      >
        <Category item={item} type={"search"} />
        <View>
          <View>
            {idx === 0 ? (
              <View
                style={{
                  width: 226,
                  marginTop: 9,
                }}
              >
                <Text numberOfLines={1} style={[ccs.NotoBold, ccs.f_15]}>
                  <Text
                    style={[
                      ccs.NotoBold,
                      ccs.f_15,
                      {
                        color: colors.main,
                      },
                    ]}
                  >
                    {search}
                  </Text>
                  {title.slice(idx + search.length, title.length)}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  width: 226,
                  marginTop: 9,
                }}
              >
                <Text numberOfLines={1} style={[ccs.NotoBold, ccs.f_15]}>
                  {title.slice(0, idx)}
                  <Text
                    style={{
                      color: colors.main,
                    }}
                  >
                    {search}
                  </Text>
                  {title.slice(idx + search.length, title.length)}
                </Text>
              </View>
            )}
            <View
              style={{
                width: 86,
                height: 86,
                position: "absolute",
                right: 0,
                top: -22.5,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 49,
                }}
                source={{ uri: item.data.img }}
              />
            </View>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={[
                ccs.NotoMedium,
                ccs.f_13,
                { width: 223, height: 39, marginTop: 6, color: colors.grey },
              ]}
            >
              {content.length !== 0 ? content : undefined}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text
        style={[
          ccs.f_12,
          ccs.NotoMedium,
          {
            color: colors.grey,
            position: "absolute",
            bottom: 12,
            left: 21,
          },
        ]}
      >
        {item.data.name}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
