import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { AppLoading } from "expo";
import AuthNavigator from './app/Navigation/AuthNavigator';
import AppNavigator from './app/Navigation/AppNavigator';
import NavigationTheme from './app/Navigation/NavigationTheme';
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      </AuthContext.Provider>
  );
};
