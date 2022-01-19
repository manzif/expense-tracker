import {
    ADD_EXPENSES_FAILURE,
    ADD_EXPENSES_START,
    ADD_EXPENSES_SUCCESS,
    FETCH_EXPENSES_FAILURE,
    FETCH_EXPENSES_START,
    FETCH_EXPENSES_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
    savingExpense: false,
    fetchExpense: false,
    expenseSaved: false,
    errors: [],
    expenses: []
};


export const expenseReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_EXPENSES_START:
            return Object.assign({}, state, { savingExpense: true });
        case ADD_EXPENSES_SUCCESS:
            return Object.assign({}, state, { savingExpense: false });
        case ADD_EXPENSES_FAILURE:
            return Object.assign({}, state, {
                savingExpense: false,
                errors: action.errors
        });
        case FETCH_EXPENSES_START:
            return Object.assign({}, state, { fetchExpense: true });
        case FETCH_EXPENSES_SUCCESS:
            return Object.assign({}, state, { fetchExpense: false, expenses: action.expenses });
        case FETCH_EXPENSES_FAILURE:
            return Object.assign({}, state, {
                fetchExpense: false,
                errors: action.errors
        });
        default:
            return state;
    }
};
