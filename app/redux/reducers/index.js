import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";
import { expenseReducer } from "./expenseReducer";


const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    expenses: expenseReducer
});

export default reducers;
