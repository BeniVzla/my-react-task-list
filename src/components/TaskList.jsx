
function TaskList(props) {
    const tasks = props.tasks.map(task => <ol key={task.id}>{task.description}</ol>);
    
    
        return (
            
            <div className="estilo1">
               
                    <input 
                    type="text"
                    placeholder="Ingresar tarea"
                    style={{
                        backgroundColor: "#76a3e6"  
                    }}
                     />
                     
                     <ul className="estilo2" >
                        
                         {tasks}
                         <button>Completado</button>
                         <button>Eliminar</button>
                        
                     </ul>
                          
            </div>
            
        );
    };
    export default TaskList;