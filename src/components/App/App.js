import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(() => {
    return 0
  })

  const addCount = () => {
    setCount((prev) => prev + 1)
  }
  const subtractCount = () => {
    setCount((prev) => prev - 1)
  }

  return (
    <div>
      <button onClick={subtractCount}>-</button>
      <span>{count}</span>
      <button onClick={addCount}>+</button>
    </div>
  )
}
