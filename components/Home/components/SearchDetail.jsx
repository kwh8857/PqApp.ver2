import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ccs from "@assets/core/ccs";
import images from "@assets/images";
import { useSelector } from "react-redux";
import * as Animated from "react-native-animatable";
import colors from "@assets/colors";
import SearchList from "./SearchList";
export default function SearchDetail() {
  const layouts = useSelector((state) => state.layouts.home.list);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  useEffect(() => {
    const arr = [];
    layouts.map((item, idx) => {
      if (item.data.data.title.includes(search)) {
        arr.push(item);
      }
    });
    setList(arr);
    return () => {};
  }, [search]);
  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        transition={"borderBottomWidth"}
        duration={400}
        style={{
          paddingTop: 7,
          backgroundColor: "white",
          height: 60,
          borderBottomWidth: 2,
          borderBottomColor: isSearch ? colors.main : "white",
          paddingLeft: 57,
          paddingRight: 56,
        }}
      >
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <TextInput
            value={search}
            placeholder="프로젝트를 검색해주세요"
            clearButtonMode="always"
            autoCompleteType="off"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(e) => {
              setSearch(e);
            }}
            onFocus={() => {
              setIsSearch(true);
            }}
            style={[
              Platform.OS === "ios" ? ccs.NotoRegular : undefined,

              {
                textAlign: "center",
                height: 33,
                fontSize: 22,
                width: "100%",
                padding: 0,
                margin: 0,
                borderWidth: 0,
                color: isSearch ? colors.main : undefined,
              },
            ]}
          />
          {Platform.OS === "android" && search.length !== 0 ? (
            <TouchableOpacity
              onPress={() => {
                setSearch("");
              }}
              style={{
                position: "absolute",
                right: 0,
              }}
            >
              <Animated.Image
                animation="fadeIn"
                source={images.home.android_search_cancle}
              />
            </TouchableOpacity>
          ) : undefined}
          {search.length === 0 ? (
            <Image
              style={{
                position: "absolute",
                right: 0,
              }}
              source={images.home.search_btn}
            />
          ) : undefined}
        </View>
      </Animated.View>
      {isSearch && list.length === 0 ? (
        <Animated.View
          animation={"fadeIn"}
          style={{
            flex: 1,
            paddingTop: 170,
            alignItems: "center",
          }}
        >
          <Image source={images.home.search_logo} />
          <Text
            style={[
              ccs.NotoRegular,
              ccs.f_15,
              {
                marginTop: 12.5,
                color: colors.grey,
              },
            ]}
          >
            검색결과가 존재하지 않습니다
          </Text>
        </Animated.View>
      ) : (
        <ScrollView>
          {list.map((item, idx) => {
            return (
              <SearchList
                key={idx}
                data={item.data}
                search={search}
                RdKey={item.key}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
