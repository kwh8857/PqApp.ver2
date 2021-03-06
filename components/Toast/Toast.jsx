import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import ccs from "@assets/core/ccs";
import colors from "@assets/colors";
import * as Animated from "react-native-animatable";
import { useSelector } from "react-redux";

export default function Toast() {
  const isToast = useSelector((state) => state.layouts.toast);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (isToast.isActive && isActive === false) {
      setIsActive(true);
      clearTimeout();
      setTimeout(() => {
        setIsActive(false);
      }, 1500);
    }
    return () => {};
  }, [isToast]);
  return (
    <Animated.View
      transition={"bottom"}
      duration={700}
      easing={"ease-in-out"}
      style={{
        position: "absolute",
        backgroundColor: colors.main,
        padding: 14,
        paddingLeft: 26,
        paddingRight: 26,
        alignSelf: "center",
        borderRadius: 5,
        bottom: isActive ? 20 : -200,
      }}
    >
      <Text style={[ccs.NotoBold, ccs.f_15, css.categorytext]}>
        {isToast.msg}
      </Text>
    </Animated.View>
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
