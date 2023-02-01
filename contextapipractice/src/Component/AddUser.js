import React, { useState } from 'react'

const AddUser = () => {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [bio, setBio] = useState();
  return (
    <div>
        <h3>Add New User</h3>
        <input 
            type='text'
            placeholder='name'
            value={name}
        />
        <input 
            type='text'
            placeholder='name'
            value={age}
        />
        <textarea 
            placeholder='enter your bio'
            value={bio}
        >
        </textarea>
    </div>
  )
}

export default AddUser