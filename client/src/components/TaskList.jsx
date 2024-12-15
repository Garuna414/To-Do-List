import React, { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "../hooks/TaskContext";

function TaskList() {
  const { tasks } = useContext(TasksContext);
  return (
    <div className="w-[80vw] max-w-[800px] overflow-y-auto h-[60vh]">
      <div className="flex flex-col gap-3 h-auto w-full justify-start">
        {tasks.map((task, key) => (
          <Task name={task.name} id={task._id} index={key} key={key} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
