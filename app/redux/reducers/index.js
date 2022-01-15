import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";


const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer
});

export default reducers;
