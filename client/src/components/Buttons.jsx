import React, { useContext } from "react";
import { TasksContext } from "../hooks/TaskContext";
function Buttons() {
  const btns = ["NEW TASK", "DELETE ALL"];
  const { tasks, setTasks } = useContext(TasksContext);

  const updateDb = () => {
    console.log("Updating database");
  };

  const addOne = () => {
    setTasks([...tasks, "New Task"]);
    updateDb();
  };

  const delAll = () => {
    setTasks([]);
    updateDb();
  };
  const fnc = [addOne, delAll];

  return (
    <div className="flex flex-row gap-5 p-5">
      {btns.map((name, key) => (
        <button
          key={key}
          className="text-black p-2 bg-white rounded-md hover:shadow hover:shadow-slate-50 hover:bg-gray-300 transition-all ease-in-out duration-200 text-sm md:text-base"
          onClick={fnc[key]}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
