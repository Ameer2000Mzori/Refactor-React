import React, { useState } from 'react'

const UseStateHook = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>this is useState</p>
      <button onClick={() => setCount((p) => (p += 1))}>Click</button>
      <p>{count}</p>
    </>
  )
}

export default UseStateHook
