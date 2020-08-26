import React, { useReducer, useState } from 'react'
import Counter from '../Counter/Counter'

const REDUCER_ACTION_KEY = {
  ADD: 'Add Todo',
  CHANGE: 'Delete Todo',
  EDIT: 'Edit Todo',
}

const reducerActions = (items, action) => {
  const addNewItem = {
    id: Date.now(),
    complete: false,
    text: action.payload.text,
  }

  switch (action.type) {
    case REDUCER_ACTION_KEY.ADD:
      return [addNewItem, ...items]
    case REDUCER_ACTION_KEY.CHANGE:
      return items.map((el) => {
        if (el.id === action.payload.keyToDelete) {
          return { ...el, complete: !el.complete }
        } else {
          return el
        }
      })
    default:
      console.log('error')
  }
}

export default function App() {
  const [items, dispatch] = useReducer(reducerActions, [])

  const [stagedItem, setStagedItem] = useState('')

  const submit = (e) => {
    e.preventDefault()
    dispatch({ type: REDUCER_ACTION_KEY.ADD, payload: { text: stagedItem } })
    setStagedItem('')
  }

  const complete = (e) => {
    const keyToDelete = parseInt(e.currentTarget.dataset.key)

    dispatch({
      type: REDUCER_ACTION_KEY.CHANGE,
      payload: { keyToDelete: keyToDelete },
    })
  }

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
        {items
          .filter((el) => !el.complete)
          .map((el) => {
            return (
              <li key={el.id}>
                <span data-edit={el.id}>{el.text}</span>
                <button
                  data-key={el.id}
                  onClick={complete}
                  className='material-icons'
                >
                  check
                </button>
              </li>
            )
          })}
      </ul>

      <Counter />
    </>
  )
}
