import React from 'react';
import { Provider } from 'react-redux';
import store from "./app/redux/store"
import RootNavigotor from './app/Navigation/RootNavigator';

export default function App() {
  return (
    <Provider store={store}>
        <RootNavigotor />
    </Provider>
  );
};
