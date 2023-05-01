import Header from "./components/Header"
import TaskList from "./components/TaskList"
import './App.css'

function App() {
  
  const tasks = [
    { id: 1, 
      description: 'Tarea 1'
    },
    {
      id: 2, 
      description: 'Tarea 2'
    },
    {
      id: 3,
      description: 'Tarea 3'
    }
  ]

  return (
    <div className="App">
      <Header />

      <TaskList tasks={tasks} />
      
      
      
    </div>
  );
}

export default App
