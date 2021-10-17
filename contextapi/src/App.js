import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';
import TodoListContextProvider from './contexts/TodoListContext';


function App() {
  return (
    <div className="App">
      <div className="ui raise very padded text container segment">
        <AuthContextProvider>
          <TodoListContextProvider>
            <ThemeContextProvider>
              <Navbar />
              <TodoList />
            </ThemeContextProvider>
          </TodoListContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
