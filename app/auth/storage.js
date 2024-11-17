import * as SecureStore from "expo-secure-store";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};


const storeExpenses = async (expenses) => {
  console.log("\n\n store")
  try {
    const jsonExpenses = JSON.stringify(expenses) // stringify the objecy
    console.log("\n\n", jsonExpenses)
    await AsyncStorage.setItem('expensesData', jsonExpenses);
  } catch (error) {
    console.log("Error storing the expenses", error);
  }
};

const getExpenses = async () => {
  try {
    const jsonExpenses = await AsyncStorage.getItem('expensesData');
    return jsonExpenses != null ? JSON.parse(jsonExpenses) : null;
  } catch (error) {
    console.log("Error getting the expenses", error);
  }
};

const removeExpenses = async () => {
  try {
    await AsyncStorage.removeItem('expensesData');
    return true;
  } catch (error) {
    console.log("Error removing the expenses", error);
    return false
  }
};


const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default { 
  getToken, 
  getUser, 
  removeToken, 
  storeToken, 
  storeExpenses, 
  getExpenses,
  removeExpenses
};
