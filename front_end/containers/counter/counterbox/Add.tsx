import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, displayAdd, addPositiveRecord } from '../../../modules/ActionCreater'


const Add: React.FC = () => {
  const dispatch = useDispatch()

  const OnIncrement = (): void => {
    const value: Date = new Date()
    dispatch(increment())
    dispatch(addPositiveRecord(value))
  }
  
  const OnDisplayAdd = (): void => {
    dispatch(displayAdd())
  }

  return(
    <div>
      <h1>ADD</h1>
      <button onClick={OnIncrement}>足す</button>
      <button onClick={OnDisplayAdd}>引き算ボタンを表示させる</button>
    </div>
  );
}

export default Add;
