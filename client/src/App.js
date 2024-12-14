import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import Title from "./components/Title";
import Buttons from "./components/Buttons";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(["Task1", "Task2", "Task3"]);
  }, []);
  return (
    <div className="bg-cyan-500 h-[100vh] w-full p-5 flex flex-col items-center justify-around">
      <Title />
      <TaskList tasks={tasks} />
      <Buttons />
    </div>
  );
}

export default App;
