import React from "react";
import TaskList from "./components/TaskList";
import Title from "./components/Title";
import Buttons from "./components/Buttons";
import { TasksProvider } from "./hooks/TaskContext";
function App() {
  return (
    <TasksProvider>
      <div className="bg-cyan-500 h-[100vh] w-full p-5 flex flex-col items-center justify-between">
        <Title />
        <TaskList/>
        <Buttons />
      </div>
    </TasksProvider>
  );
}

export default App;
