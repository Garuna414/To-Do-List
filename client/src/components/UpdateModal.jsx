import React, { useState, useContext } from "react";
import { TasksContext } from "../hooks/TaskContext";

function UpdateModal({ name, id }) {
  const { visible, toggle, updateTask } = useContext(TasksContext);

  const [data, setData] = useState("");

  const handleEdit = (id) => {
    if (data.length !== 0) {
      console.log(id);      
      updateTask(id, data);
      toggle();
    }
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full ${
        visible ? "flex flex-col items-center justify-center" : "hidden"
      }`}
    >
      <div
        className="absolute top-0 right-0 bg-black opacity-30 h-[100vh] w-[100vw] z-10"
        onClick={() => toggle()}
      ></div>
      <div className="bg-cyan-300 max-h-[300px] max-w-[300px] h-[40vh] w-[75vw] rounded-md z-20 p-5 flex flex-col gap-7">
        <div className="w-full">
          <p>Old Task</p>
          <p>{name}</p>
        </div>
        <div className="w-full">
          <p className="pb-2">New Task</p>
          <textarea
            name="newName"
            id="newName"
            className="slate-100 px-2 py-1 w-full"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="w-full flex flex-row justify-center gap-10">
          <button
            className="bg-white w-fit px-3 py-1 rounded-md hover:bg-slate-300 hover:shadow-sm hover:shadow-black border border-black transition-all ease-in-out duration-200"
            onClick={() => handleEdit(id)}
            disabled={data.length === 0}
          >
            Update
          </button>
          <button
            className="bg-white w-fit px-3 py-1 rounded-md hover:bg-slate-300 hover:shadow-sm hover:shadow-black border border-black transition-all ease-in-out duration-200"
            onClick={() => toggle()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
