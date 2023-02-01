import React, { useContext } from 'react';
import { AppContext } from '../Context';
import User from './User';

const UserList = () => {
    const [user] = useContext(AppContext);
  return (
    <div>
        <h3>Avaliable User</h3>
        {user.map(user => <User key= {user.Id} />)}
    </div>
  )
}

export default UserList;
