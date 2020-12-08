import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "@assets/colors";
import ccs from "@assets/core/ccs";

export default function TextIntroduce(props) {
  const data = props.data;
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: colors.grey3,
        width: "100%",
        height: "auto",
        backgroundColor: colors.grey2,
        padding: 44,
        paddingLeft: 22,
        paddingRight: 22,
        flexDirection: "row",
        marginTop: 34,
      }}
    >
      <Image
        resizeMode={"contain"}
        style={{
          width: "47.1%",
          height: 200,
        }}
        source={{ uri: data.img }}
      />
      <View
        style={{
          marginLeft: 17,
          width: "47.7%",
        }}
      >
        <Text style={[ccs.NotoBold, ccs.f_16]}>{data.title}</Text>
        <Text
          ellipsizeMode={"tail"}
          style={[
            ccs.NotoRegular,
            ccs.f_14,
            {
              marginTop: 8,
            },
          ]}
        >
          {data.name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
