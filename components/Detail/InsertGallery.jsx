import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import colors from "@assets/colors";
import ccs from "@assets/core/ccs";
import { useNavigation } from "@react-navigation/native";

export default function InsertGallery(props) {
  const navigation = useNavigation();
  const data = props.data;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("galleryDetail");
      }}
      style={{
        marginTop: 60,
        width: "100%",
        borderWidth: 1,
        borderColor: colors.grey3,
        backgroundColor: colors.grey2,
        padding: 22,
        paddingTop: 26,
        paddingBottom: 32,
      }}
    >
      <Image
        resizeMode={"contain"}
        source={{ uri: data.img }}
        style={{ width: "100%", height: 331 }}
      />
      <Text
        style={[
          ccs.f_18,
          ccs.NotoBold,
          {
            marginTop: 23,
          },
        ]}
      >
        {data.title}
      </Text>
      <Text style={[ccs.f_16, ccs.NotoRegular]}>{data.sub}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
