import React, { useState } from 'react';
import './App.css';
import AddUser from './Component/AddUser';
import UserList from './Component/UserList';
import { AppContext } from './Context';

const userList = [
  {
    id: 1,
    name: "john",
    age: 26,
    bio: "i am software engineer"
  }
];
function App() {
  const [users, setUsers] = useState(userList);
  const dispacthUserEvent = (actiontype, payload) => {
    switch(actiontype) {
      case "ADD_USER":
        return setUsers([...users, payload.newUser]);
      case "REMOVE_USER":
        return setUsers(users.filter(user => user.id !== payload.userId));
      default: 
          return;
    }
  }
  return (
    <div className='App'>
      <AppContext.Provider value={{users, dispacthUserEvent}}>
        <AddUser />
        <UserList />
      </AppContext.Provider>
    </div>
  );
}

export default App;
