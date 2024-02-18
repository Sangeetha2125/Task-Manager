import axios from "axios";
import { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const UpdateTask = ({ taskID }) => {
  const [name, setName] = useState("");
  const [isCompleted, setIsCompleted] = useState();
  const [error,setError] = useState("")

  useEffect(() => {
    axios
      .get(`api/tasks/${taskID}`)
      .then((res) => {
        setName(res.data.task.name);
        setIsCompleted(res.data.task.completed);
      })
      .catch((err) => {
        console.log(err);
        if(err.response.status==404){
          window.location.href="/"
        }
      });
  }, [taskID]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("")
    axios
      .patch(`api/tasks/${taskID}`, { name, completed: isCompleted })
      .then((res) => {
        window.location.href = "/";
      })
      .catch((err) => {
        setError(err.response.data.message)
      });
  };

  return (
    <div className="shadow-md rounded-md m-4 bg-[#ffffff1e] px-6 py-4">
      <form>
        <div className="flex flex-col w-full py-2 gap-2">
          <div className="flex gap-4 w-full max-sm:flex-wrap lg:flex-nowrap">
            <div className="flex flex-col w-full gap-2">
              <label>Name</label>
              <input
                type="text"
                className="outline-none border-2 border-white p-2 rounded-md bg-transparent"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button
              type="button"
              className={`text-nowrap text-md border-2 max-sm:mt-2 mt-7 p-2 px-4 max-sm:w-full lg:w-auto bg-transparent text-white rounded-md flex items-center justify-center gap-2 `}
              onClick={(e) => setIsCompleted(!isCompleted)}
            >
              {isCompleted ? (
                <>
                  Mark as Incomplete <XCircle className="w-5 h-5"/>
                </>
              ) : (
                <>
                  Mark as Completed <CheckCircle className="w-5 h-5"/>
                </>
              )}
            </button>
          </div>
          <span className="text-red-500">{error}</span>
          <button
            type="submit"
            className="text-md mt-2 p-2.5 bg-[#201b17] text-white rounded-md"
            onClick={handleSubmit}
          >
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;
