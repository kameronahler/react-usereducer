import React, { useState, useReducer } from 'react'

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'subtract':
      return { count: state.count - 1 }
    case 'add':
      return { count: state.count + 1 }
  }
}

export default function App() {
  const [state, dispatch] = useReducer(stateReducer, { count: 0 })

  const changeCount = (e) => {
    const type = e.currentTarget.dataset.type

    dispatch({ type: type })
  }

  return (
    <div>
      <button data-type={'subtract'} onClick={changeCount}>
        -
      </button>
      <span>{state.count}</span>
      <button data-type={'add'} onClick={changeCount}>
        +
      </button>
    </div>
  )
}
