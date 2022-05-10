import { REGISTER_SUCCESS, LOGIN_SUCCESS } from "./ActionTypes";
import axios from "axios";
// import { useDispatch } from "react-redux";
const register_success = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};

const login_success = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

const register = (payload) => async (dispatch) => {
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/register", payload)
    .then((res) => dispatch(register_success(res.data)))
    .catch((err) => {
      console.log(err + "something went wrong");
    });
};

const login = (payload) => async (dispatch) => {
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login", payload)
    .then((response) => {
      dispatch(login_success(response.data));
    })
    .catch((err) => {
      console.log(err + "something went wrong");
    });
};

export { register_success, login_success, register, login };
