import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ccs from '@assets/core/ccs';
import colors from '@assets/colors';
import {useDispatch, useSelector} from 'react-redux';
const left = [
  '행복한',
  '즐거운',
  '웃는',
  '미소짓는',
  '사랑스러운',
  '귀여운',
  '예쁜',
  '친절한',
  '다정한',
  '따뜻한',
  '우아한',
  '부드러운',
  '아름다운',
  '매력적인',
  '깜찍한',
  '착한',
  '화사한',
  '훌륭한',
  '위대한',
  '순한',
  '싱그러운',
  '산뜻한',
  '신난',
  '똑똑한',
  '자랑스러운',
  '명쾌한',
  '밝은',
  '긍정적인',
  '지혜로운',
  '현명한',
];
const right = [
  '강아지',
  '고양이',
  '호랑이',
  '사자',
  '코끼리',
  '사슴',
  '곰',
  '햄스터',
  '참새',
  '고슴도치',
  '너구리',
  '캥거루',
  '토끼',
  '원숭이',
  '거북이',
  '악어',
  '돌고래',
  '다람쥐',
  '펭귄',
  '부엉이',
  '나비',
  '까치',
  '병아리',
  '풍뎅이',
  '기린',
  '여우',
  '오리',
  '양',
  '팬더',
  '두더지',
];
export default function Comment(props) {
  const pgkey = props.pgkey;
  const timestamp = Date.now();
  const dispatch = useDispatch();
  const layouts = useSelector((state) => state.layouts.home.detail.comments);
  const [comment, setComment] = useState('');
  function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
  }
  const productionPath = useSelector(
    (state) => state.config.identification.state,
  );
  const __updateComment = useCallback(() => {
    let url;
    if (productionPath === 'test') {
      url =
        'http://localhost:5001/projectquestion-2d800/us-central1/officeApi/update/comment';
    } else {
      url =
        'https://us-central1-projectquestion-2d800.cloudfunctions.net/officeApi/update/comment';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        project_key: pgkey,
        comment,
        timestamp,
        writer: `${randomItem(left)} ${randomItem(right)}`,
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch({
          type: 'COMMENT/UPDATE',
          payload: result.data,
        });
        setComment('');
      });
  }, [comment, pgkey, timestamp]);
  return (
    <View
      style={{
        marginTop: 10,
        backgroundColor: 'white',
        padding: 22,
        paddingTop: 18,
      }}>
      <View>
        <Text
          style={[
            ccs.f_18,
            ccs.NotoBold,
            {
              color: colors.semi_black,
            },
          ]}>
          댓글
          <Text
            style={[
              ccs.f_18,
              ccs.NotoBold,
              {
                color: colors.main,
                marginLeft: 4,
              },
            ]}>
            {layouts.length}
          </Text>
        </Text>
        <TextInput
          multiline={true}
          textAlignVertical={'top'}
          value={comment}
          onChangeText={(e) => {
            setComment(e);
          }}
          style={{
            width: '100%',
            height: 104,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: colors.grey5,
            marginTop: 12,
            padding: 10,
          }}
        />
        <View
          style={{
            marginTop: 9,
          }}>
          <TouchableOpacity
            onPress={__updateComment}
            style={{
              width: 73,
              height: 35,
              backgroundColor: colors.main,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              position: 'absolute',
              right: 0,
            }}>
            <Text
              style={[
                ccs.NotoBold,
                ccs.f_14,
                {
                  color: 'white',
                },
              ]}>
              확인
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: 72,
        }}>
        {layouts.map((item, idx) => {
          return (
            <View
              key={idx}
              style={{
                backgroundColor: colors.grey2,
                borderRadius: 5,
                width: '100%',
                padding: 16,
                paddingBottom: 23,
                borderWidth: 1,
                borderColor: colors.grey6,
                marginBottom: 15,
              }}>
              <Text style={[ccs.NotoBold, ccs.f_16]}>{item.writer}</Text>
              <Text style={[ccs.NotoRegular, ccs.f_14, {marginTop: 10}]}>
                {item.content}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
