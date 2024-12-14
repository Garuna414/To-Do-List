import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="w-[80vw] max-w-[800px]">
      <div className="flex flex-col gap-3 h-auto w-full">
        {tasks.map((name, key) => (
          <Task name={name} key={key} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
