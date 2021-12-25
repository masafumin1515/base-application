import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, displayAdd, addNegativeRecord } from '../../../modules/ActionCreater'


const Reduce: React.FC = () => {
  const dispatch = useDispatch()

  const OnDecrement = (): void => {
    const value: Date = new Date()
    dispatch(decrement())
    dispatch(addNegativeRecord(value))
  }

  const OnDisplayAdd = (): void => {
    dispatch(displayAdd())
  }
  
  return(
    <div>
      <h1>REDUSE</h1>
      <button onClick={OnDecrement}>引く</button>
      <button onClick={OnDisplayAdd}>足し算ボタンを表示させる</button>
    </div>
  );
}

export default Reduce;