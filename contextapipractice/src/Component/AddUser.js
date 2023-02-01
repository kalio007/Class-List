import React, { useContext, useState } from 'react'
import { AppContext } from '../Context';

const AddUser = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [bio, setBio] = useState('');

    const { dispacthUserEvent } = useContext(AppContext);

    const handleAddUser = () => {
        const user = { id: Math.random(), name, age, bio};
        dispacthUserEvent('ADD_USER', {newUser: user});
    }
  return (
    <div>
        <h3>Add New User</h3>
        <input 
            type='text'
            placeholder='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
        />
        <input 
            type='text'
            placeholder='name'
            value={age}
            onChange={(event) => setAge(event.target.value)}
        />
        <textarea 
            placeholder='enter your bio'
            value={bio}
            onChange={(event) => setBio(event.target.value)}
        >
        </textarea>
        <button onClick={handleAddUser}>Add User</button>
    </div>
  )
}

export default AddUser;