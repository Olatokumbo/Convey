import * as actionTypes from "../actions/actionTypes";
const initialState = {
  authError: null,
  uid: null,
  displayName: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      console.log("LOGIN SUCCESS");
      return {
        ...state,
        authError: null,
      };
    case actionTypes.LOGIN_FAILED:
      console.log("LOGIN FAILED");
      return {
        ...state,
        authError: action.err.message,
      };
    case actionTypes.SIGNUP_SUCCESS:
      console.log("SIGNUP SUCCESS");
      return {
        ...state,
        authError: null,
        uid: action.uid,
        displayName: action.displayName
      };
    case actionTypes.SIGNUP_FAILED:
      console.log("SIGNUP FAILED");
      return {
        ...state,
        authError: action.err.message,
      };
    case actionTypes.LOGOUT:
      console.log("LOGOUT");
      return {
        ...state,
        authError: null,
      };
    case actionTypes.LOGIN_USER:
      console.log("LOGIN USER");
      return {
        ...state,
        uid: action.uid,
        displayName: action.displayName
      };
    case actionTypes.LOGOUT_USER:
      console.log("LOGOUT USER");
      return {
        ...state,
        uid: null,
      };
    default:
      return state;
  }
};

export default authReducer;
