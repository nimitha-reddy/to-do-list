import {useState} from 'react';
import { useForm } from 'react-hook-form'

function Addtodo({onFormSubmit}){
    const{register,handleSubmit,formState:{errors}}=useForm()

    
    return(
        <div className='row row-11 row-sm-10 row-md-7 border-end border-5 p-3'>
            <p className='display-6 text-info heading  text-center'>New Todo</p>
          <div >
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className='mb-3 '>
            <label htmlFor="todo">enter a task</label>
            <input type="text" id="todo" className='form-control'{...register("todo",{required:true})}/>
            {errors.todo?.type=="required"&&<p className='text-danger'>*task is required</p>}
            </div>
            <button type="submit" btn btn-info className='btn btn-info'>addtodo</button>
          </form>
          </div>
          
        </div>
    )
}

export default Addtodo;