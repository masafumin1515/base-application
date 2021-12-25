import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './modules/Store';
import { push } from 'react-router-redux';
import { logout } from './modules/ActionCreater';
import { GuestRoute, PrivateRoute } from './containers/Auth';
import Signin from './containers/Signin';
import Counterbox from './containers/counter/counterbox/CountBox';
import History from './containers/counter/History';

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const OnLogout = () => {
    dispatch(logout()),
    dispatch(push('/signin'))
  }

  return(
    <div>
      <GuestRoute path="/signin" children={<Signin />} />
      <PrivateRoute path="/count" children={<Counterbox />} />
      <PrivateRoute path="/history" children={<History />} />
      {user.name ? <button onClick={OnLogout}>ログアウト</button> : ''}
    </div>
  );
}

export default App;
