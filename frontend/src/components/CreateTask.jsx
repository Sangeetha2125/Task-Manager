import axios from "axios";
import { useState } from "react";

const CreateTask = ({ handleRefresh }) => {
  const [name, setName] = useState("");
  const [error,setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("")
    axios
      .post("/api/tasks", { name })
      .then((res) => {
        handleRefresh();
        setName("");
      })
      .catch((err) => {
        setError(err.response.data.message)
      });
  };

  return (
    <div className="shadow-md rounded-md m-4 bg-[#ffffff1e] px-6 py-4">
      <form>
        <div className="flex flex-col w-full py-2 gap-2">
          <label>Name</label>
          <input
            type="text"
            className="outline-none border-2 border-white p-2 rounded-md bg-transparent"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="text-red-500">{error}</span>
          <button
            type="submit"
            className="text-md mt-2 p-2.5 bg-[#201b17] text-white rounded-md"
            onClick={handleSubmit}
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
