import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import colors from "@assets/colors";
import images from "@assets/images";
import ccs from "@assets/core/ccs";

export default function InsertLink(props) {
  const data = props.data;

  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(data.url);
      }}
      style={{
        paddingLeft: 22,
        paddingRight: 22,
        marginTop: 16,
      }}
    >
      <View
        style={{
          borderWidth: 1.5,
          borderColor: colors.main,
          borderRadius: 5,
          width: "100%",
          height: 49,
          padding: 13,
          paddingTop: 11,
          paddingBottom: 11,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image source={images.detail.link_asset} />
        <Text
          style={[
            ccs.NotoBold,
            ccs.f_16,
            {
              marginLeft: 5,
              color: colors.main,
            },
          ]}
        >
          {data.name}
        </Text>
        <Image
          style={{
            marginLeft: 13,
          }}
          source={images.detail.link_arrow}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
