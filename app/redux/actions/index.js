import axios from "axios";
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGOUT
} from "./types";
import authStorage from "../../auth/storage";

const baseURL = 'https://rgaa-server.herokuapp.com/api/'


// register action creators
const registerStart = () => {
    return {
        type: REGISTER_START
    };
};

const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS
    };
};

const registerFailure = (errors) => {
    return {
        type: REGISTER_FAILURE,
        errors
    };
};

export const register = (userData) => {
    return (dispatch) => {
        return axios
            .post(`${baseURL}expense`, {
                ...userData
            })
            .then(dispatch(registerStart()))
            .then((res) => {
                if (res.status === 201) {
                    dispatch(registerSuccess());
                } else {
                    dispatch(registerFailure(res.data.message));
                }
            })
            .catch((err) => {
                if (err.message === "Network Error") {
                    alert("Try again Oops, Something went wrong");
                }
                dispatch(registerFailure(err.message));
            });
    };
};


// login action creators

const loginStart = () => {
    return {
        type: LOGIN_START
    };
};

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

export const loginFailure = (errors) => {
    return {
        type: LOGIN_FAILURE,
        errors
    };
};


export const login = (userData) => {
    return (dispatch) => {
        return axios
            .post(`${baseURL}expense/login`, {
                ...userData
            })
            .then(dispatch(loginStart()))
            .then((res) => {
                if (res.status === 200) {
                    authStorage.storeToken(res.data.token); // Storing access token to local storage
                    dispatch(loginSuccess(res.data.user));
                } else {
                    const msg = res.data.message ?
                        res.data.description :
                        "Incorrect email or password!";
                    dispatch(loginFailure(msg));
                }
            })
            .catch((error) => {
                dispatch(loginFailure(error.message));
            });
    };
};

//action creators for logout

export const logout = () => {
    authStorage.removeToken();;
    return {
        type: LOGOUT
    };
};
