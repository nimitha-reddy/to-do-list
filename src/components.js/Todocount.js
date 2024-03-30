function Todocount({todos}){
    return(
        <div className="display-5 text-center text-success heading ">
            <h4>Todocount</h4>
           <h2 className="text-center text-success">{todos.length}</h2> 
        </div>
    )
}

export default Todocount;