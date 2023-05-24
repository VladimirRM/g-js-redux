
import './App.css';
import User from './components/User';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import{useSelector} from  'react-redux'


function App() {

const todos = useSelector((state)=>state.todos.todo)
  return (
    <div className="App">

   <User/>
   <Form/>
  { todos?.map((todo)=>(
   <TodoItem key={todo.id}
    todo={todo}/>

  ))}

    </div>
  );
}

export default App;
