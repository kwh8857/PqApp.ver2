import React, { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import Video from "react-native-video";
export default function Full() {
  const route = useRoute();
  const data = route.params.data;
  const [isbuffer, setIsbuffer] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator
        animating={isbuffer}
        style={{ position: "absolute", zIndex: 20 }}
        size={"large"}
        color={"#999999"}
      />
      <Video
        onBuffer={(e) => {
          if (e.isBuffering) {
            setIsbuffer(true);
          } else {
            setIsbuffer(false);
          }
        }}
        source={{ uri: data }}
        fullscreen={true}
        resizeMode={"contain"}
        controls={true}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      />
    </View>
  );
}
