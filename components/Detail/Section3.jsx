import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Keyboard,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import colors from "@assets/colors";
import ccs from "@assets/core/ccs";
import TextTitle from "./TextTitle";
import TextContent from "./TextContent";
import TextIntroduce from "./TextIntroduce";
import InsertImage from "./InsertImage";
import InsertVideo from "./InsertVideo";
import InsertGallery from "./InsertGallery";
import InsertLink from "./InsertLink";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { HEADER_BACK_CHANGE } from "./actiontype";
import InsertSlide from "./InsertSlide";

export default function Section3() {
  const router = useRoute();
  const data = router.params.data;

  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(false);
  const templates = useSelector((state) => state.layouts.home.detail.content);
  const [KeyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardEnabled, setIsKeyboardEnabled] = useState(false);
  useEffect(() => {
    Keyboard.dismiss();
    Keyboard.addListener("keyboardWillShow", (e) => {
      const keyboardHeight = e.endCoordinates.height;

      setKeyboardHeight(keyboardHeight);
      setIsKeyboardEnabled(true);
    });

    Keyboard.addListener("keyboardWillHide", () => {
      setKeyboardHeight(0);
      setIsKeyboardEnabled(false);
    });
    return () => {
      Keyboard.removeAllListeners("keyboardWillShow");
      Keyboard.removeAllListeners("keyboardWillHide");
    };
  }, []);
  useEffect(() => {
    if (scroll) {
      dispatch({
        type: HEADER_BACK_CHANGE,
        payload: true,
      });
    } else {
      dispatch({
        type: HEADER_BACK_CHANGE,
        payload: false,
      });
    }
    return () => {};
  }, [scroll]);
  useEffect(() => {
    if (data.comments !== undefined) {
      dispatch({
        type: "COMMENT/UPDATE",
        payload: Object.values(data.comments),
      });
    }
    return () => {};
  }, []);
  return (
    <ScrollView
      scrollEventThrottle={8}
      style={{ flex: 1 }}
      onScroll={(event) => {
        let scroll = event.nativeEvent.contentOffset.y;
        if (scroll > 440) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      }}
    >
      <View
        style={{
          bottom: KeyboardHeight,
        }}
      >
        <ImageBackground
          source={{ uri: data.data.img }}
          style={{
            width: "100%",
            height: 455,
          }}
        >
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              backgroundColor: colors.semi_black,
              opacity: 0.6,
            }}
          />
          <View
            style={{
              width: "100%",
              height: "100%",
              paddingTop: 261,
              padding: 24,
              paddingBottom: 22,
            }}
          >
            <View
              style={{
                width: 76,
                height: 28,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colors.main,
                borderRadius: 18,
              }}
            >
              <Text style={[ccs.NotoBold, ccs.f_13, { color: "white" }]}>
                {data.data.type === "VIDEO"
                  ? "시사회"
                  : data.data.type === "IMAGE"
                  ? "전시회"
                  : "칼럼"}
              </Text>
            </View>
            <Text
              style={[
                ccs.f_25,
                ccs.NotoMedium,
                {
                  color: "white",
                  marginTop: 12,
                },
              ]}
            >
              {data.data.title}
            </Text>
          </View>
          <Text
            style={[
              ccs.NotoMedium,
              ccs.f_14,
              {
                color: "white",
                position: "absolute",
                bottom: 22,
                left: 23,
              },
            ]}
          >
            {data.data.name}
          </Text>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            paddingBottom: 93,
            alignItems: "center",
          }}
        >
          {templates.map((item, idx) => {
            if (item.type === "TEXT_TITLE") {
              return <TextTitle data={item} key={idx} />;
            } else if (item.type === "TEXT_CONTENT") {
              return <TextContent data={item} key={idx} />;
            } else if (item.type === "TEXT_CHARACTER") {
              return <TextIntroduce data={item.content} key={idx} />;
            } else if (item.type === "INSERT_IMAGE") {
              return <InsertImage data={item.content} key={idx} />;
            } else if (item.type === "INSERT_VIDEO") {
              return item.content.length !== 0 ? (
                <InsertVideo data={item.content} key={idx} />
              ) : undefined;
            } else if (item.type === "INSERT_GALLERY") {
              return <InsertGallery data={item.content} key={idx} />;
            } else if (item.type === "INSERT_LINK") {
              return <InsertLink data={item.content} key={idx} />;
            } else {
              return <InsertSlide data={item.content} key={idx} />;
            }
          })}
        </View>
        <Comment
          pgkey={data.projectKey}
          data={data.comments !== undefined ? data.comments : []}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
