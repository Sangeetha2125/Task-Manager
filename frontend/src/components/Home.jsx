import { useEffect, useState } from "react";
import axios from 'axios'
import CreateTask from "./CreateTask";
import Tasks from "./Tasks";

function Home() {
  const [tasks, setTasks] = useState([])
  const [refresh,setRefresh] = useState(false)
  
  useEffect(()=>{
    axios.get("/api/tasks")
    .then(res=>{
      console.log(res.data)
      setTasks(res.data.tasks)
    })
    .catch(err=>{
      console.log(err)
    })
  },[refresh])
  
  const handleRefresh = () => {
    setRefresh(!refresh)
  }

  const handleDelete = (id) => {
    axios.delete(`/api/tasks/${id}`)
    .then(res => {
      setRefresh(!refresh)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  return (
    <div className="bg-black min-h-screen text-white app flex items-center p-4 flex-col w-[100%]">
      <h1 className="text-4xl m-4">Task Manager</h1>
      <div className="flex flex-col gap-4 w-[100%] md:w-[80%] lg:w-[50%]">
        <CreateTask handleRefresh={handleRefresh}/>
        <Tasks tasks={tasks} handleDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default Home;
