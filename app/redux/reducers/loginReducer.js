import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from "../actions/types";

const INITIAL_STATE = {
    logging: false,
    isAuth: false,
    errors: []
};


export const loginReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOGIN_START:
            return Object.assign({}, state, { logging: true });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, { logging: false, isAuth: true });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                logging: false,
                errors: action.errors
            });
        case LOGOUT:
            return Object.assign({}, state, { isAuth: false });
        default:
            return state;
    }
};
