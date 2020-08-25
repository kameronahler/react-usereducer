import React, { useReducer, useState } from 'react'
import Counter from '../Counter/Counter'

// structured key for switch
const REDUCER_ACTION_KEY = {
  ADD: 'Add Todo',
}

// runs whenever dispatch is called
const reducerActions = (state, action) => {
  const addNewItem = {
    id: Date.now(),
    complete: false,
    text: action.payload.text,
  }

  switch (action.type) {
    case REDUCER_ACTION_KEY.ADD:
      return [addNewItem, ...state]
    default:
      console.log('something went wrong')
  }
}

export default function App() {
  const [stagedItem, setStagedItem] = useState('') // local state initializer

  // items refers to this particular useReducer's state
  // dispatch refers to this particular useReducer's action(s) function
  const [items, dispatch] = useReducer(reducerActions, [])

  // form onSubmit
  const submit = (e) => {
    e.preventDefault()

    // includes the type for the switch statement in the useReducer's function
    // and a payload which is essentially rider-data, or a diy props for action
    dispatch({ type: REDUCER_ACTION_KEY.ADD, payload: { text: stagedItem } })

    setStagedItem('') // clear the input
  }

  // render
  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor='input'>Add Item</label>
        <input
          id={'input'}
          onChange={(e) => {
            setStagedItem(e.currentTarget.value)
          }}
          placeholder={'New to do'}
          type='text'
          value={stagedItem}
        />
      </form>

      <ul>
        {items.map((el) => {
          return <li key={el.id}>{el.text}</li>
        })}
      </ul>

      <Counter />
    </>
  )
}
