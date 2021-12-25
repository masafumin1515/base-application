import React from "react";
import { useSelector } from 'react-redux'
import { RootState } from '../modules/Store'
import { Route, Redirect } from 'react-router-dom';

interface Props {
  path: string,
  children: JSX.Element
};

// ログイン状態の時のアクセス権限
export const PrivateRoute = (props: Props) => {
  const user = useSelector((state: RootState) => state.user.name)
  return user ? <Route {...props} /> : <Redirect to="/signin" />; 
}

// ログアウト状態の時のアクセス権限
export const GuestRoute = (props: Props) => {
  const user = useSelector((state: RootState) => state.user.name)
  return user ? <Redirect to="/count" /> : <Route {...props} />; 
}


