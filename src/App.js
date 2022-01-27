import logo from './logo.svg';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="App">
     <div className="todo-app">
       {/* <h1>TodoApp</h1> */}
       <Todolist/>
     </div>
    </div>
  );
}

export default App;
