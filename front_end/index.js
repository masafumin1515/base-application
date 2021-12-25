import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // 作成したStoreを全コンポネントにに渡す機能。
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import App from './App'
import store from './modules/Store'
import { history } from './modules/Store'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
