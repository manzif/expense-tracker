import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../Components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../Components/forms";
import { bindActionCreators } from "redux";
import { login } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ActivityIndicator from "../Components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(3).label("Password"),
});

function LoginScreen () {

  const { logging, errors } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const loginAction = bindActionCreators(login, dispatch)

  const handleSubmit = (userInfo) => {
    loginAction(userInfo);
  };

  return (
    <>
    <ActivityIndicator visible={logging} />
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {/* <ErrorMessage
            error="Invalid email and/or password."
            visible={loginFailed}
          /> */}
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" />
        </Form>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
