import React, { useContext } from "react";
import { TasksContext } from "../hooks/TaskContext";
import UpdateModal from "./UpdateModal";

function Task({ name, id, index }) {
  const { deleteTask, toggle } = useContext(TasksContext);
  console.log("id", id);

  return (
    <div className="bg-white border border-black rounded-md shadow-md shadow-slate-400 flex flex-row justify-between md:text-base text-sm font-body">
      <div className="py-1 w-[50px]">
        <p className="mx-3">{index + 1}.</p>
      </div>
      <div className="w-[80%] py-1 flex-nowrap overflow-x-hidden flex flex-row">
        <p className="">{name}</p>
      </div>
      <div className="flex flex-row w-[50%] md:max-w-[110px] max-w-[100px] items-center">
        <div className="max-w-[55px] h-full">
          <button
            className="hover:bg-slate-200 py-1 px-[10px]"
            onClick={() => toggle()}
          >
            Edit
          </button>
        </div>
        <div className="max-w-[55px] h-full">
          <button
            className="hover:bg-slate-200 py-1 px-[10px]"
            onClick={() => deleteTask(id)}
          >
            Done
          </button>
        </div>
      </div>
      <UpdateModal name={name} id={id}/>
    </div>
  );
}

export default Task;
