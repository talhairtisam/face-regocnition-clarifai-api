import { actionType } from "./actionType";


export const ImageUrlAction = (text) => {
    return {
        type: actionType.INSERTIMAGE,
        payload: text
    }
}

export const toggleLogin = () => {
    return {
        type: actionType.TOGGLELOGIN
    }
}

export const boxValueAction = (value) =>{
    return {
        type: actionType.BOXVALUE,
        payload: value
    }
}