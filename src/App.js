import 'bootstrap/dist/css/bootstrap.css';
import Addtodo from "./components.js/Addtodo";
import Todocount from "./components.js/Todocount";
import Todolist from "./components.js/Todolist";
import {useState} from 'react'


function App() {

  const [todos,setTodos]=useState([])

    const onFormSubmit=(todoObj) => {
        console.log(todoObj)
        setTodos([...todos,todoObj.todo])
    }
    
  return (
    <div className="container text-center  mt-5">
      <div className="row">
        <div className="col-sm-4">
          <Addtodo onFormSubmit={onFormSubmit}/>
        </div>
        <div className="col-sm-4">
          <Todolist todos={todos} />
        </div>
        <div className="col-sm-4">
          <Todocount todos= {todos } />
        </div>
      </div>
    </div>  
  );
}

export default App;
