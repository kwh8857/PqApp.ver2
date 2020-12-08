import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

export default function InsertImage(props) {
  const data = props.data;
  const [height, setheight] = useState(0);

  useEffect(() => {
    Image.getSize(data, (width, height) => {
      setheight(height);
    });

    return () => {};
  }, []);
  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
        height: height,
        marginTop: 34,
      }}
    >
      <Image
        resizeMode={"cover"}
        source={{ uri: data }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
