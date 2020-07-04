import * as actionTypes from "../actions/actionTypes";
const initialState = {
    projects:[]
}

const projectReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.GET_PROJECT:
            return{
                ...state,
                projects: action.data
            }
        case actionTypes.CREATE_PROJECT:
            return{
                ...state,
                projects: state.projects.concat(action.data)
            }
         case actionTypes.CREATE_PROJECT_ERROR:
             return{

             } 
        default:
            return state
    }
}

export default projectReducer;