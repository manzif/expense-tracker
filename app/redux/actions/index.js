import axios from "axios";
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    FETCH_RESOURCES_START,
    FETCH_RESOURCES_FAILURE,
    FETCH_RESOURCES_SUCCESS
} from "./types";

const BASE_URL = 'https://rgaa-server.herokuapp.com/api/';


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
    console.log("\n\n\n\n registerActions")
    // return (dispatch) => {
    //     return axios
    //         .post(`${BASE_URL}/register`, {
    //             ...userData
    //         })
    //         .then(dispatch(registerStart()))
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 dispatch(registerSuccess());
    //                 alert('Success')
    //             } else if (res.status === 401) {
    //                 dispatch(registerFailure(res.data.description));
    //             } else {
    //                 dispatch(registerFailure(res.data.description));
    //             }
    //         })
    //         .catch((err) => {
    //             if (err.message === "Network Error") {
    //                 alert("Try again Oops, Something went wrong");
    //             }
    //             dispatch(registerFailure(err.message));
    //         });
    // };
};
