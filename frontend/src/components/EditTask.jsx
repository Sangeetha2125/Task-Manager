import { useParams } from "react-router-dom";
import UpdateTask from "./UpdateTask";

const EditTask = () => {
  const { id } = useParams();
  return (
    <div className="bg-black min-h-screen text-white app flex items-center p-4 flex-col w-[100%]">
      <h1 className="text-4xl m-4">Task Manager</h1>
      <div className="flex flex-col gap-4 w-[100%] md:w-[80%] lg:w-[50%]">
        <UpdateTask taskID={id}/>
      </div>
    </div>
  );
};

export default EditTask;
