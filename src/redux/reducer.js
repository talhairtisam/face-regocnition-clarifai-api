import { actionType } from "./actionType";

const INITIAL_STATE = {
    imageUrl: "",
    isLogin: false,
    box: {}
}


export const imageReducer = (state=INITIAL_STATE,action={}) => {
    switch(action.type){
        case actionType.INSERTIMAGE:
            return {...state, imageUrl:action.payload }
        case actionType.TOGGLELOGIN:
            return {...state, isLogin: !state.isLogin }
        case actionType.BOXVALUE:
            return {...state, box: action.payload }
        default:
            return state;
    }
}