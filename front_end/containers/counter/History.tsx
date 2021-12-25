import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { RootState } from '../../modules/Store'
import Header from './Header'

const History: React.FC = (): JSX.Element => {
  const records = useSelector((state: RootState) => state.records)
    
  return (
    <div>
      <Header />
      <h1>検索履歴一覧</h1>
      <h2><Link to="/count">TOP</Link></h2>
      <ul>
        { records.map((record: { text: string }, i: number) => {
            return <li key={i}>{record.text}</li>
        }) }
      </ul>
    </div>
  )
}

export default History;

