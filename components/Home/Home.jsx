import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import HomeSearch from './components/HomeSearch';
import HomeList from './components/HomeList';
import {useDispatch, useSelector} from 'react-redux';
export default function Home() {
  const dispatch = useDispatch();
  const productionPath = useSelector(
    (state) => state.config.identification.state,
  );
  useEffect(() => {
    let url;
    if (productionPath === 'test') {
      url =
        'http://localhost:5001/projectquestion-2d800/us-central1/officeApi/rewardslist';
    } else {
      url =
        'https://us-central1-projectquestion-2d800.cloudfunctions.net/officeApi/rewardslist';
    }
    fetch(url)
      .then((res) => res.json())
      .then(({status, data}) => {
        if (status) {
          let arr = data.slice();
          arr.forEach((item, idx) => {
            if (item.data.state === 'stanby') {
              arr.splice(idx, 1);
              arr.unshift(item);
            }
          });
          arr.forEach((item, idx) => {
            if (item.data.state === 'open') {
              arr.splice(idx, 1);
              arr.unshift(item);
            }
          });

          dispatch({
            type: 'REWARD/LIST',
            payload: arr,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',

        paddingTop: 39,
      }}>
      <HomeSearch />
      <HomeList />
    </View>
  );
}

const styles = StyleSheet.create({});
