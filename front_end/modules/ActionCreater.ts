import axios from 'axios';
import { ActionTypes } from "./ActionTypes";
import { 
    CountActionTypes, 
    RecordActionTypes, 
    DisplayAddActionTypes,
    UserActionTypes, 
    } from "./types";
import { Dispatch } from "redux";
import { push } from 'react-router-redux';


// action(値)を返す関数を作成
// Countについて
export const increment = () : CountActionTypes => {
    return {
        type: ActionTypes.increment
    }
}
export const decrement = () : CountActionTypes => {
    return {
        type: ActionTypes.decrement
    }
}

// Recordsについて
export const addPositiveRecord = (value: Date) : RecordActionTypes => {
    return {
        type: ActionTypes.addPositiveRecord,
        payload: {
            text: `${value.getHours()}時${value.getMinutes()}分に足した`
        }
    }
}
export const addNegativeRecord = (value: Date) : RecordActionTypes => {
    return {
        type: ActionTypes.addNegativeRecord,
        payload: {
            text: `${value.getHours()}時${value.getMinutes()}分に引いた`
        }
    }
}


// DisplayAddについて
export const displayAdd = () : DisplayAddActionTypes => {
    return {
        type: ActionTypes.displayAdd
    }
}


// ログイン　or　ログアウトについて
// 同期actionCreater
const loginRequest = () : UserActionTypes => {
    return {
        type: ActionTypes.loginRequest
    }
}

const loginReceiveSuccess = (data: any) : UserActionTypes => {
    return {
        type: ActionTypes.loginReceiveSuccess,
        data: data
    }
}

const loginReceiveFailed = () : UserActionTypes => {
    return {
        type: ActionTypes.loginReceiveFailed
    }
}

export const logout = () : UserActionTypes => {
    return {
        type: ActionTypes.logout
    }
}

// 非同期ActionCreater
const ROOT_URL = 'http://192.168.33.10:3000/'
export const getUser = (formValues: { email: string; password: string; }) => {
    return (dispatch: Dispatch) => {
        dispatch(loginRequest());
        axios.get(`${ROOT_URL}api/v1/users/signin?email=${formValues.email}&password=${formValues.password}`)
            .then(response => {
                dispatch(loginReceiveSuccess(response.data))
                dispatch(push('/count'))
            })
            .catch(() => {   // response : null
                console.log("response: null")
                dispatch(loginReceiveFailed());
            })
    }
}