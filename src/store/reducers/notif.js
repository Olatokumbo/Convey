import * as actionTypes from "../actions/actionTypes";
const initialState ={
    notifications: []
}

const notifReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_NOTIFICATION:
            return{
                ...state,
                notifications: action.notifications
            }
        default:
            return state
    }
}

export default notifReducer;