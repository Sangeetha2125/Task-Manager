import { CheckCircle, Edit2, List, Trash } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tasks = ({tasks,handleDelete}) => {

    return ( 
        <div className="m-4 py-4 flex flex-col gap-4">
            {tasks.map(task=>(
                <div className="shadow-md rounded-md p-4 bg-[#ffffff1e] flex items-center" key={task._id}>
                    {task.completed ? <CheckCircle className="mr-4 h-6 w-6"/>: <List className='h-6 w-6 mr-4' />}
                    <p className="text-lg">{task.name}</p>
                    <div className="action-icons ml-auto flex gap-4 items-center">
                        <Link to={`${task._id}`}>
                            <Edit2 className="h-6 w-6 cursor-pointer"/>
                        </Link>
                        <Trash className="h-6 w-6 cursor-pointer" onClick={()=>handleDelete(task._id)}/>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Tasks;