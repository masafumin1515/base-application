import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import { RootState } from '../../../modules/Store'
import Add from './Add'
import Reduce from './Reduce'
import Header from '../Header'

const CounterBox: React.FC = (): JSX.Element => {
  const flag = useSelector((state: RootState) => state.displayAdd.displayAdd)

  return (
    <div>
      <Header />
      {flag ? <Add /> : <Reduce />}
      <h1><Link to="/history">検索履歴一覧</Link></h1>
    </div>
  )
}

export default CounterBox;
