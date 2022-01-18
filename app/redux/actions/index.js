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
};
