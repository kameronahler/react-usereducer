import React, { useReducer } from 'react'

const REDUCER_ACTION = {
  SUBTRACT: 'subtract',
  ADD: 'add',
}

const stateReducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTION.SUBTRACT:
      return { count: state.count - 1 }
    case REDUCER_ACTION.ADD:
      return { count: state.count + 1 }
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(stateReducer, { count: 0 })

  const changeCount = (e) => {
    const type = e.currentTarget.dataset.type

    dispatch({ type: type })
  }

  return (
    <div>
      <button data-type={REDUCER_ACTION.SUBTRACT} onClick={changeCount}>
        -
      </button>
      <span>{state.count}</span>
      <button data-type={REDUCER_ACTION.ADD} onClick={changeCount}>
        +
      </button>
    </div>
  )
}
