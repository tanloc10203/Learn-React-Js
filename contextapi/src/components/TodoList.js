import React, { Component, useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoListContext } from '../contexts/TodoListContext';

// export default class TodoList extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
//     const theme = isDarkTheme ? darkTheme : lightTheme;
//     return (
//       <div style={{ background: theme.background, color: theme.text, height: "140px", textAlign: "center" }}>
//         <p className="item">Plan the family trip</p>
//         <p className="item">Go for shopping for dinner</p>
//         <p className="item">Go for a walk</p>
//         <button className="ui button primary" onClick={changeTheme}>Change the theme</button>
//       </div>
//     )
//   }
// }


const TodoList = () => {
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const { todos, dispatch } = useContext(TodoListContext);
  const [todo, setTodo] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text: todo });
    setTodo('');
  }

  const handleRemoveTodo = id => {
    dispatch({ type: 'REMOVE_TODO', id });
  }

  return (
    <div style={{ background: theme.background, color: theme.text, textAlign: "center" }}>
      {
        todos.length > 0 ? (
          todos.map(todo => (
            <p className="item" onClick={() => handleRemoveTodo(todo.id)} key={todo.id}>{todo.text}</p>
          ))
        ) : (
          <div>You have not to do</div>
        )
      }
      <form onSubmit={handleOnSubmit}>
        <div className="ui input">
          <label className="ui right pointing label" htmlFor="todo">Add todo:</label>
          <input type="text" id="todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <input type="submit" value="Add new todo" className="ui button primary" />
        </div>
      </form>
      <button className="ui button primary" onClick={changeTheme}>Change the theme</button>
    </div>
  )
}

export default TodoList;