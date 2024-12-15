import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import UpdateModal from "../components/UpdateModal";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [modalData, setModalData] = useState([{}]);

  // Update menu toggler
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };

  const apiUrl = "https://to-do-list-u0jh.onrender.com/tasks";

  // Fetch all tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetching task endpoint
  const fetchTasks = async () => {
    try {
      const response = await axios.get(apiUrl);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Create task endpoint
  const createTask = async () => {
    try {
      const response = await axios.post(apiUrl, { name: "New Task" });
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  // Delete one task endpoint
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Delete all task endpoint
  const deleteAllTasks = async () => {
    try {
      await axios.delete(apiUrl);
      setTasks([]);
    } catch (error) {
      console.error("Error deleting all tasks:", error);
    }
  };

  // Updating one task endpoint
  const updateTask = async (id, updatedName) => {
    try {
      await axios.put(`${apiUrl}/${id}`, { name: updatedName });
      setTasks(
        tasks.map((task) =>
          task._id === id ? { ...task, name: updatedName } : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        deleteAllTasks,
        updateTask,
        fetchTasks,
        visible,
        toggle,
        modalData,
        setModalData,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
