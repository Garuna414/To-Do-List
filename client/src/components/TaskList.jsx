import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="w-[80vw] max-w-[800px] overflow-y-scroll h-[60vh]">
      <div className="flex flex-col gap-3 h-auto w-full justify-start">
        {tasks.map((name, key) => (
          <Task name={name} index={key} key={key}/>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
