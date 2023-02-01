import React, { useContext } from 'react';
import { AppContext } from '../Context';
import User from './User';

const UserList = () => {
    const {users} = useContext(AppContext);
  return (
    <div>
        <h3>Avaliable User</h3>
        {users.map(user => <User key= {user.Id} user={user} />)}
    </div>
  )
}

export default UserList;
