import React, { useState } from 'react';
import './App.css';
import AddUser from './Component/AddUser';
import User from './Component/User';
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
  const [users, setUser] = useState();
  const dispacthUserEvent = (actiontype, payload) => {
    switch(actiontype) {
      case "ADD_USER":
        return setUser([...users, payload.newUser]);
      case "REMOVE_USER":
        return setUser(users.filter(user => user.id === payload.userId));
      default: 
          return;
    }
  }
  return (
    <div className="App">
      <AppContext.Provider value={[users, dispacthUserEvent]}>
        <AddUser />
        <User />
        <UserList />
      </AppContext.Provider>
    </div>
  );
}

export default App;
