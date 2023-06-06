
import './App.css';
import User from './components/User';












function App() {

    const todos = useSelector((state)=>state.todo.todos)






  return (
    <div className="App"> 
    <Form/>
 
 
<User/>
 
    </div>
  );
}

export default App;
