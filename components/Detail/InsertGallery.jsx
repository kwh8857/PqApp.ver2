import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import colors from "@assets/colors";
import ccs from "@assets/core/ccs";
import { useNavigation } from "@react-navigation/native";

export default function InsertGallery(props) {
  const navigation = useNavigation();
  const data = props.data;
  const [height, setHeight] = useState(0);
  useEffect(() => {
    Image.getSize(data.img, (width, height) => {
      setHeight(height);
      console.log(height);
    });
    return () => {};
  }, []);
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
        padding: 20,
        paddingBottom: 32,
      }}
    >
      <Image
        resizeMode={"contain"}
        source={{ uri: data.img }}
        style={{ width: "100%", height: height }}
      />
      <Text style={[ccs.f_18, ccs.NotoBold, { marginTop: 20 }]}>
        {data.title}
      </Text>
      <Text style={[ccs.f_16, ccs.NotoRegular]}>{data.sub}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
