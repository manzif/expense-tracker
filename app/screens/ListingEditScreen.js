import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  SubmitButton,
} from "../Components/forms";
import { addExpense } from "../redux/actions/expensesActions";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Screen from "../Components/Screen";
import ActivityIndicator from "../Components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  date: Yup.string().required().min(1).label("Date"),
});


function ListingEditScreen() {

  const { user } = useSelector((state) => state.login);
  const { savingExpense, errors } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const addExpenseAction = bindActionCreators(addExpense, dispatch)


  const handleSubmit = (expenses, { resetForm }) => {

    addExpenseAction({ ...expenses }, user.id );

    resetForm();
  };

  return (
    <>
      <ActivityIndicator visible={savingExpense} />
      <Screen style={styles.container}>
        <Form
          initialValues={{
            title: "",
            price: "",
            date: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField maxLength={255} name="title" placeholder="Title" />
          <FormField maxLength={255} name="date" placeholder="date" />
          <FormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
            width={120}
          />
          <SubmitButton title="Post" />
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
export default ListingEditScreen;
