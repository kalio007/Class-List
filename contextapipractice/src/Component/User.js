import React from 'react'
import UserList from './UserList';

const User = ({user}) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <h4>{user.age}</h4>
      <div>
        <small>{user.bio}</small>
      </div>
    </div>
  );
}

export default User