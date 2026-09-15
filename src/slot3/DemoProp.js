import { Button } from 'bootstrap';
import React from 'react'

// function Hello(props) {
//   return (
//     <div>
//       <h1>Hello, My name is {props.name}, I'm {props.age}</h1>
//     </div>
//   )
// }

// export default Hello;

// function User(name, age, address ) {
//   return (
//     <div>
//       <h1>Hello, My name is {name}, I'm {age}, My address is {address}</h1>
//     </div>
//   )
// }

// export default User;

//prop co the la array
// function User(props) {
//   return (
//     <div>
//       {props.user.map((user) => (
//         <h1 key={user.id}>
//           Hello, My name is {user.name}, I'm {user.age}, My address is {user.address}
//         </h1>
//       ))}
//     </div>
//   )
// }

// export default User;

//prop co the la function
function User({ user, onClick }) {
  return (
    <div>
      {user.map((user) => (
        <div key={user.id}>
          <h1>
            Hello, My name is {user.name}, I'm {user.age}, My address is {user.address}
          </h1>

          <button onClick={() => onClick(user.id)}>
            Click me
          </button>
        </div>
      ))}
    </div>
  )
}

export default User;