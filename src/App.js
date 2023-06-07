
import './index.css';
import User from './components/User';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import Posts from './features/post/Posts';









function App() {
const todos  = useSelector((state)=> state.todo.todos)

 return (
    <div className="App"> 
    <Form/>
    {todos?.map((todo)=>(
        <TodoItem 
        key={todo.id}
        todo={todo}
        />
    ))}
 
<User/>
<Posts/>
 
    </div>
  );
}

export default App;
