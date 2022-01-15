import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
    registering: false,
    registered: false,
    errors: []
};


export const registerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_START:
            return Object.assign({}, state, { registering: true });
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                registering: false,
                registered: true
            });
        case REGISTER_FAILURE:
            return Object.assign({}, state, {
                registering: false,
                errors: action.errors
            });
        default:
            return state;
    }
};
