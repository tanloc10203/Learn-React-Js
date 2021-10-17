import React, { useState, useEffect } from 'react'
import { AddNewTodo } from './AddNewTodo';

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Pay bills", id: 1 },
    { text: "Do your homework", id: 2 },
    { text: "Feed the dog", id: 3 },
  ]);

  const [count, setCount] = useState(0)

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { text, id: Math.random() }
    ]);
  }

  useEffect(() => {
    console.log("use effect todos", todos);
  }, [todos]);

  useEffect(() => {
    console.log("use effect count", count);
  }, [count]);

  return (
    <div>
      <ul>
        {todos.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddNewTodo addTodo={addTodo} />
      <button onClick={() => setCount(count + 1)}>Score: {count}</button>
    </div>
  )
}
