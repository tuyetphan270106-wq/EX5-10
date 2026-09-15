import React, { useState } from 'react'

function DemoState1() {
    const [name,setName] = useState("");
  return (
    <div>
      <h1>Hello {name}</h1>
      <input type="text" value={name} onChange={(e) =>setName(e.target.value)} placeholder='Nhap ten...'/>
    </div>
  )
}

export default DemoState1
