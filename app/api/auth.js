import client from "./client";

const login = (email, password) => client.post("expense/login", { email, password });

export default {
  login,
};
