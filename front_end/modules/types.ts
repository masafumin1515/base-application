import { Action } from "redux";
import { logout } from "./ActionCreater";
import { ActionTypes } from "./ActionTypes";

// 各stateの型定義
// Count 総計
export type Count = {
    value: number
}

// カウント履歴
type Record = {
    text: string
}
export type Records = Record[];


// 足し算ボタンと引き算ボタンの表示に関するboolean値
export type DisplayAdd = {
    displayAdd: boolean
}

// 取得したユーザーの型
export type User = {
    name: string
}





// actionの型を作成　実際のactionの値に沿った型
// Countについて
interface incrementAction extends Action {
    type: typeof ActionTypes.increment,
}
interface decrementAction extends Action {
    type: typeof ActionTypes.decrement,
}

// カウント履歴について
interface addPositiveRecordAction extends Action {
    type: typeof ActionTypes.addPositiveRecord
    payload: {
        text: string
    }
}
interface addNegativeRecordAction extends Action {
    type: typeof ActionTypes.addNegativeRecord
    payload: {
        text: string
    }
}

// 足し算、引き算の表示について
interface displayAddAction extends Action {
    type: typeof ActionTypes.displayAdd
}




// ログイン状態 or ログアウト状態に遷移する際に発行されるactionの型
// responceが返ってくるまで
interface loginRequest extends Action {
    type: typeof ActionTypes.loginRequest
} 

// userを取得できた時
interface loginReceiveSuccess extends Action {
    type: typeof ActionTypes.loginReceiveSuccess
    data: {
        name: string
    }
}

// userを取得できなかった時
interface loginReceiveFailed extends Action {
    type: typeof ActionTypes.loginReceiveFailed
}

// ログアウトしたいとき
interface logout extends Action {
    type: typeof ActionTypes.logout
}



export type CountActionTypes = incrementAction | decrementAction
export type RecordActionTypes = addPositiveRecordAction | addNegativeRecordAction
export type DisplayAddActionTypes = displayAddAction
export type UserActionTypes = loginRequest | loginReceiveSuccess | loginReceiveFailed | logout



