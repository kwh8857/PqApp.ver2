import React, {useState, useEffect, useRef, useCallback} from 'react';
import {StyleSheet, View, TextInput, Platform} from 'react-native';
import colors from '@assets/colors';
import ccs from '@assets/core/ccs';
import {useDispatch, useSelector} from 'react-redux';
import {DETAIL_PIN_STATE_CHANGE} from './actiontype';

export default function InputPin(props) {
  const dispatch = useDispatch();
  const pgKey = props.pgkey;
  const reKey = props.reKey;

  const productionPath = useSelector(
    (state) => state.config.identification.state,
  );
  const layout = useSelector((state) => state.layouts.detail);
  const refone = useRef(null);
  const reftwo = useRef(null);
  const refthree = useRef(null);
  const reffour = useRef(null);
  const reffive = useRef(null);
  const refsix = useRef(null);
  const [arr, setArr] = useState([]);
  const [pinarr, setPinarr] = useState([]);
  const [re, setre] = useState(false);

  useEffect(() => {
    if (pinarr.length === 6) {
      let insert = pinarr.join('');
      let url;
      if (productionPath === 'test') {
        url =
          'http://localhost:5001/projectquestion-2d800/us-central1/officeApi/checkpin';
      } else {
        url =
          'https://us-central1-projectquestion-2d800.cloudfunctions.net/officeApi/checkpin';
      }
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          pin: insert,
          projectKey: pgKey,
          rewardsKey: reKey,
        }),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.state) {
            dispatch({
              type: DETAIL_PIN_STATE_CHANGE,
              payload: 'CLEAR',
            });
          } else {
            dispatch({
              type: DETAIL_PIN_STATE_CHANGE,
              payload: 'NOTPIN',
            });
          }
        })
        .catch(() => {
          dispatch({
            type: DETAIL_PIN_STATE_CHANGE,
            payload: 'CLEAR',
          });
        });
    } else {
      dispatch({
        type: DETAIL_PIN_STATE_CHANGE,
        payload: 'NONE',
      });
    }

    return () => {};
  }, [pinarr, re]);

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {layout.pin.map((item, idx) => {
        const index = item.idx;
        return (
          <View
            key={idx}
            style={{
              marginRight: 7.4,
              marginTop: 30,
            }}>
            <TextInput
              keyboardType={'number-pad'}
              style={[
                {
                  width: 44,
                  height: 52,
                  borderBottomWidth: 2,
                  borderBottomColor: arr.includes(idx)
                    ? colors.main
                    : colors.grey4,
                  color: colors.main,
                  fontSize: 33,
                  padding: 0,
                  margin: 0,
                  borderWidth: 0,
                  textAlign: 'center',
                  paddingVertical: 0,
                },

                Platform.OS === 'ios' ? ccs.NotoBold : undefined,
              ]}
              ref={
                index === 0
                  ? refone
                  : index === 1
                  ? reftwo
                  : index === 2
                  ? refthree
                  : index === 3
                  ? reffour
                  : index === 4
                  ? reffive
                  : refsix
              }
              maxLength={1}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  if (index === 1) {
                    refone.current.focus();
                  } else if (index === 2) {
                    reftwo.current.focus();
                  } else if (index === 3) {
                    refthree.current.focus();
                  } else if (index === 4) {
                    reffour.current.focus();
                  } else if (index === 5) {
                    reffive.current.focus();
                  }
                }
              }}
              onChangeText={(e) => {
                if (e.length !== 0) {
                  setArr([...arr, idx]);
                  setPinarr([...pinarr, e]);
                  if (index === 0) {
                    reftwo.current.focus();
                  } else if (index === 1) {
                    refthree.current.focus();
                  } else if (index === 2) {
                    reffour.current.focus();
                  } else if (index === 3) {
                    reffive.current.focus();
                  } else if (index === 4) {
                    refsix.current.focus();
                  }
                } else if (e.length === 0) {
                  setre(!re);
                  pinarr.splice(idx, 1);
                  setPinarr(pinarr);
                  arr.splice(arr.indexOf(idx), 1);
                  setArr(arr);
                }
              }}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
