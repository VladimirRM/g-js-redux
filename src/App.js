
import './App.css';
import TodoItem from './components/TodoItem';
// import User from './components/User';
import Form from './components/Form';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state)=>state.todo.todos)
  return (
    <div className="App">
   {/* <User/> */}
   <Form/>
   {
    todos?.map((todo)=>(
      <TodoItem
      key={todo.id}
      todo={todo}
      />

    ))
   }
    </div>
  );
}

export default App;
