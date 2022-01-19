import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import NavigationTheme from './NavigationTheme';
import { useSelector } from "react-redux";

export default function RootNavigotor() {
    const { isAuth } = useSelector((state) => state.login);

  return (
      <NavigationContainer theme={NavigationTheme}>
        { isAuth ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer> 
  );
};
