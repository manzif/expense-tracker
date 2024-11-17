import React from 'react';
import { Provider } from 'react-redux';
import store from "./app/redux/store"
import RootNavigotor from './app/Navigation/RootNavigator';
import OfflineNotice from "./app/Components/OfflineNotice";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <Provider store={store}>
          <RootNavigotor />
      </Provider>
    </>
  );
};
