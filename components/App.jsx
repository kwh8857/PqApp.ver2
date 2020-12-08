import React, { useEffect } from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReudcer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";

import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";
import Navigation from "./Navigation";
import { navigationRef } from "./navigation/Rootnavigation";
import Toast from "./Toast/Toast";
const App = () => {
  const MyStore = createStore(rootReudcer, composeWithDevTools());

  useEffect(() => {
    SplashScreen.hide();
    return () => {};
  }, []);
  return (
    <Provider store={MyStore}>
      <NavigationContainer ref={navigationRef}>
        <Navigation />
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default App;
