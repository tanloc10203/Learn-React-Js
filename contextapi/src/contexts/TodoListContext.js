import React, { createContext, useState, useReducer } from 'react'
import { todosReducer } from '../reducers/todosReducers';

export const TodoListContext = createContext();

const initialState = [
  { text: "Plan the family trip", id: 1 },
  { text: "Go for shopping for dinner", id: 2 },
  { text: "Go for a walk", id: 3 }
]

const TodoListContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, initialState)

  return (
    <TodoListContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider;