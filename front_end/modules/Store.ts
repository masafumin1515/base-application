import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { CountReducer,
         RecordReducer,
         DisplayAddReducer,
         UserReducer } from "./Reducers";
import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter } from "connected-react-router";
import ReduxForm from 'redux-form';
import { createBrowserHistory, History } from "history";


interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;

const RootReducer = combineReducers({
  count: CountReducer,
  records: RecordReducer,
  displayAdd: DisplayAddReducer,
  user: UserReducer,
  form: ReduxForm.reducer
})
export type RootState = ReturnType<typeof RootReducer>



export const history = createBrowserHistory();

const createRootReducer = (history: History<unknown>) => combineReducers({
  router: connectRouter(history),
  count: CountReducer,
  records: RecordReducer,
  displayAdd: DisplayAddReducer,
  user: UserReducer,
  form: ReduxForm.reducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer(history),composeEnhancers(applyMiddleware(routerMiddleware(history),thunk))
);

export default store