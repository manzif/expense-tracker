import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './app/redux/store';
// import AuthNavigator from './app/Navigation/AuthNavigator';
import AppNavigator from './app/Navigation/AppNavigator';
import NavigationTheme from './app/Navigation/NavigationTheme';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};
