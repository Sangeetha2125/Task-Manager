import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    axios.get("/api/tasks")
    .then(res=>{
      console.log(res.data)
      setTasks(res.data.tasks)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  
  return (
    <div className="App">
      {tasks.map(task=>(
        <div key={task._id}>
          <p>{task.name}</p>
          <p>{task.completed? "true":"false"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
