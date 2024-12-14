import React, { useContext, useState } from "react";
import { TasksContext } from "../hooks/TaskContext";
import UpdateModal from "./UpdateModal";

function Task({ name, index }) {
  const { tasks, setTasks } = useContext(TasksContext);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState("");
  const updateDb = () => {
    console.log("Updating database");
  };
  const delTask = (index) => {
    const copy = [...tasks];
    if (tasks.length > 0) {
      copy.splice(index, 1);
      setTasks(copy);
      updateDb();
    } else {
      console.log("No tasks available!");
    }
  };

  const updateItem = (index, updatedTask) => {
    console.log("updatedTask", updatedTask);
    const copy = [...tasks];
    copy[index] = updatedTask;
    setTasks(copy);
    updateDb();
    toggle();
  };

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="bg-white border border-black rounded-md shadow-md shadow-slate-400 flex flex-row justify-between md:text-base text-sm">
      <div className="w-[60%] py-1 flex-nowrap overflow-x-hidden flex flex-row">
        <p className="mx-3">{index+1}.</p>
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
            onClick={() => delTask(index)}
          >
            Done
          </button>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          visible ? "flex flex-col items-center justify-center" : "hidden"
        }`}
      >
        {/* <UpdateModal /> */}
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
            <p className="pb-2">New name</p>
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
              onClick={() => updateItem(index, data)}
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
    </div>
  );
}

export default Task;
