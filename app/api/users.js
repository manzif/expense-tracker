import client from "./client";

const register = (userInfo) => client.post("/expense", userInfo);

export default { register };
