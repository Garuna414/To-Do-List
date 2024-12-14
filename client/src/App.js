import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import Title from "./components/Title";
import Buttons from "./components/Buttons";
import { TasksContext } from "./hooks/TaskContext";
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(["Task1", "Task2", "Task3"]);
  }, []);
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <div className="bg-cyan-500 h-[100vh] w-full p-5 flex flex-col items-center justify-between">
        <Title />
        <TaskList tasks={tasks} />
        <Buttons />
      </div>
    </TasksContext.Provider>
  );
}

export default App;
