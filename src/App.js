
import './App.css';
import User from './components/User';
import { useSelector } from 'react-redux';
import Form from './components/Form';
import TodoItem from "./components/TodoItem"




function App() {

  const todos = useSelector((state)=>state.todos.todo)


  return (
    <div className="App">

   <User/>
   <Form/>

      {todos?.map((todo)=>(
   <TodoItem key={todo.id}
         todo={todo}
   />

      ))}
    </div>
  );
}

export default App;
