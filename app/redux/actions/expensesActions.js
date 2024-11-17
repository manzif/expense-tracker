import axios from "axios";
import { 
    FETCH_EXPENSES_FAILURE, 
    FETCH_EXPENSES_SUCCESS, 
    FETCH_EXPENSES_START,
    ADD_EXPENSES_FAILURE,
    ADD_EXPENSES_SUCCESS,
    ADD_EXPENSES_START
} from "./types";
import authStorage from "../../auth/storage";

const baseURL = 'https://rgaa-server.herokuapp.com/api/'

// add expenses action creators
const addExpenseStart = () => {
    return {
        type: ADD_EXPENSES_START
    };
};

const addExpenseSuccess = () => {
    return {
        type: ADD_EXPENSES_SUCCESS
    };
};

const addExpenseFailure = (errors) => {
    return {
        type: ADD_EXPENSES_FAILURE,
        errors
    };
};

export const addExpense = (userData, id) => {
    const data = {
        title: userData.title,
        date: userData.date,
        price: userData.price,
        userId: id
    }

    return (dispatch) => {
        return axios
            .post(`${baseURL}expenses`, {
                ...data
            })
            .then(dispatch(addExpenseStart()))
            .then((res) => {
                if (res.status === 200) {
                    dispatch(addExpenseSuccess());
                } else {
                    dispatch(addExpenseFailure(res.data.message));
                }
            })
            .catch((err) => {
                if (err.message === "Network Error") {
                    alert("Try again Oops, Something went wrong");
                }
                dispatch(addExpenseFailure(err.message));
            });
    };
};


// fetch expenses action creators

const fetchExpenseStart = () => {
    return {
        type: FETCH_EXPENSES_START
    };
};

export const fetchExpenseSuccess = (expenses) => {
    return {
        type: FETCH_EXPENSES_SUCCESS,
        expenses
    };
};

export const fetchExpenseFailure = (errors) => {
    return {
        type: FETCH_EXPENSES_FAILURE,
        errors
    };
};


export const fetchExpenses = (id) => {
    return (dispatch) => {
        return axios
            .get(`${baseURL}expenses/expenses/${id}`)
            .then(dispatch(fetchExpenseStart()))
            .then((res) => {
                if (res.status === 200) {
                    authStorage.storeExpenses(res.data.expenses) // saving our list of expenses
                    dispatch(fetchExpenseSuccess(res.data.expenses));
                } else {
                    dispatch(fetchExpenseFailure(res.data.message));
                }
            })
            .catch((error) => {
                dispatch(fetchExpenseFailure(error.message));
            });
    }
};
