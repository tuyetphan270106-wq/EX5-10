import React, { useState } from 'react'

function DemoState2() {
    const [user,setUser] = useState([
         {
      id : 1,
      name : "John",
      age: 20,
      address: "Ha Noi"
    },
    {
      id : 2,
      name : "Joe",
      age: 18,
      address: "Quang Ninh"
    }
    ]);
    const addUser =()=>{
        const newUser = {
            id:3,
            name: "Sarah",
            age: 21,
            address: "UK"
        };
        setUser([...user, newUser]);
    }
  return (
    <div>
        <button onClick={addUser}>Them user</button>
      {user.map((user) => (
        <div key={user.id}>
          <h1>
            Hello, My name is {user.name}, I'm {user.age}, My address is {user.address}
          </h1>

          <button onClick={() => console.log(user.id)}>
            Click me
          </button>
        </div>
      ))}
    </div>
  )
}

export default DemoState2
