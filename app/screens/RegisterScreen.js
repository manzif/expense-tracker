import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../Components/Screen";
import { Form, FormField, SubmitButton, ErrorMessage } from "../Components/forms";
import { bindActionCreators } from "redux";
import { register } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ActivityIndicator from "../Components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen () {
  const { registering, errors } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const registerAction = bindActionCreators(register, dispatch)

  const handleSubmit = (userInfo) => {
    registerAction(userInfo);
  };

  return (
    <>
    <ActivityIndicator visible={registering} />
      <Screen style={styles.container}>
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {/* <ErrorMessage error={error} visible={error} /> */}
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
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
          <SubmitButton title="Register" />
        </Form>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
