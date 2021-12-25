import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules/Store'

const Header: React.FC = (): JSX.Element => {
  const countState = useSelector((state: RootState) => state.count)
  const user = useSelector((state: RootState) => state.user)
  return(
    <div>
      <h3>count number : { countState.value }</h3>
      <h3>user name : { user.name }</h3>
    </div>
  );
}


export default Header;