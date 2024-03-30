import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faAudible } from "@fortawesome/free-brands-svg-icons";
 function Todolist({todos}){
    return(
        <div className='border-end border-5 p-3'>
        <div>
           <p className="display-6 text-center text-warning heading" >
            <FontAwesomeIcon icon={faTasks} className="text-danger " size='1x' />List of todos</p>
           <hr/>
            {
                todos.map((task,index)=><h3 className="text-primary text-center" key={index}>{task}</h3>)
            }
            
        </div>
        </div>
    )
}

export default Todolist;