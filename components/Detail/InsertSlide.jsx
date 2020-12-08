import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import images from "@assets/images";
import ccs from "@assets/core/ccs";
import { useNavigation } from "@react-navigation/native";

export default function InsertSlide(props) {
  const { data } = props;
  const navigation = useNavigation();
  return (
    <View style={{ width: "100%", height: 200, marginTop: 38 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("slidedetail", { data });
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          resizeMode={"contain"}
          style={{ width: "100%", height: "100%" }}
          source={{ uri: data[0] }}
        />
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            right: 22,
            bottom: 22,
            width: 64,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image style={{ zIndex: 2 }} source={images.detail.slider_asset} />
          <Text
            style={[
              ccs.f_16,
              ccs.NotoBold,
              {
                marginLeft: 3,
                color: "white",
                zIndex: 2,
              },
            ]}
          >
            {data.length}
          </Text>
          <View
            style={{
              position: "absolute",
              backgroundColor: "black",
              opacity: 0.5,
              width: "100%",
              height: "100%",
              borderRadius: 50,
              zIndex: 1,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
