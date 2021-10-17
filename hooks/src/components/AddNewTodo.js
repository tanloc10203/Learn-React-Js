import React, { useState } from 'react'

export const AddNewTodo = ({ addTodo }) => {
  const [todos, setTodos] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTodo(todos);
    setTodos('');
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="todo">To do</label>
      <input type="text" id="todo" value={todos} onChange={(e) => setTodos(e.target.value)} />
      <input type="submit" />
    </form>
  )
}
