import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  //   USER_LOGOUT,
  //   USER_REGISTER_FAIL,
  //   USER_REGISTER_REQUEST,
  //   USER_REGISTER_SUCCESS,
  //   USER_UPDATE_FAIL,
  //   USER_UPDATE_REQUEST,
  //   USER_UPDATE_SUCCESS,
} from "../redux/constants/userConstants";
import axios from "axios";

function login(email, password) {
  return function (dispatch) {
    return new Promise(function (res, rej) {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      dispatch({ type: USER_LOGIN_REQUEST });
      axios
        .post("/api/users/login", { email, password }, config)
        .then((data) => res(data))
        .catch((err) => rej(err));
    })
      .then((data) => {
        localStorage.setItem("notesUser", JSON.stringify(data));
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      });
  };
}

module.export = {
  login,
};
