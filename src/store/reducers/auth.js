import * as actionTypes from "../actions/actionTypes";
const initialState = {
    isAuthenicated: false
};

const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.LOGIN:
            return{
                ...state,
                isAuthenicated: true
            }
        case actionTypes.LOGOUT:
            return{
                ...state,
                isAuthenicated: false
            }
        default:
            return{
                state
            }
    }
}

export default authReducer;