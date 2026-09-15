import React, {useState} from 'react'

function DemoState() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Number: {count}</h1>
      <button onClick={() => setCount(count +5)}>Tang</button>
      <button onClick={() => setCount(count -2)}>Giam</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default DemoState
