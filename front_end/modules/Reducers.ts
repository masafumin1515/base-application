import { ActionTypes } from "./ActionTypes"
import { Count, CountActionTypes,
         Records, RecordActionTypes,
         DisplayAdd, DisplayAddActionTypes,
         User, UserActionTypes } from "./types"
        
// Conutについて
const countInitialState : Count = {
  value: 0,
}
export const CountReducer = (state = countInitialState, action: CountActionTypes) : Count => {
  switch (action.type) {
    case ActionTypes.increment:
      return { ...state, value: state.value + 1 }

    case ActionTypes.decrement:
      return { ...state, value: state.value - 1 }

  }
  return state;
} 

// Recordsについて
const recordsInitialState : Records = [];

export const RecordReducer = (state = recordsInitialState, action: RecordActionTypes) : Records => { 
  const newState = state.slice();
  switch (action.type) {
    case ActionTypes.addPositiveRecord:
      newState.push({
        text: action.payload.text
      })
      return newState

    case ActionTypes.addNegativeRecord:
      newState.push({
        text: action.payload.text
      })
      return newState

    default:
      return state;
    }
}



// DisplayAddについて
const displayAddInitialState : DisplayAdd = {
  displayAdd: true
}

export const DisplayAddReducer = (state = displayAddInitialState, action: DisplayAddActionTypes) : DisplayAdd=> {
  switch (action.type) {
    case ActionTypes.displayAdd:    
      return(
        Object.assign({}, state, { displayAdd: !(state.displayAdd) })
      )
    default:
      return state;
  }
}

// Userについて
const userInitialState : User = {
  name: null,
}

export const UserReducer = (state = userInitialState, action: UserActionTypes) : User => {
  const newState = Object.assign({},state)
  switch (action.type) {
    case ActionTypes.loginRequest:
      return newState

    case ActionTypes.loginReceiveSuccess:
      newState.name = action.data.name;
      return newState

    case ActionTypes.loginReceiveFailed:
      newState.name = null;
      return newState

    case ActionTypes.logout:
      newState.name = null;
      return newState;

    default:
      return state;
  }
}
