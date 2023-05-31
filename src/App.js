
import './App.css';
import User from './components/User';
import { useSelector } from 'react-redux';
import Form from './components/Form';
import TodoItem from "./components/TodoItem"




function App() {

  const todos = useSelector((state)=>state.todo.todos)


  return (
    <div className="App"> 

 
    </div>
  );
}

export default App;
