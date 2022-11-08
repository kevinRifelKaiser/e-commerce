import React, { createContext, useContext, useState } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from "../api/tasks.api";

//Create the context
export const TaskContext = new createContext();

//Create a hook to access the provider
export const useTasks = () => {
  const context = useContext(TaskContext);
  //Handle if some component is not inside of this context provider
  if (!context) {
    throw new Error("useTask must be used within a TaskContextProvider");
  } else {
    return context;
  }
};

//Create the context provider to wrap the component
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  //Get tasks
  const loadTasks = async () => {
    const response = await getTasksRequest();
    setTasks(response.data);
  };

  //Delete a specific task
  const deleteTask = async (id) => {
    try {
      const itemId = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  //Create a task
  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //Get a task
  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  //Update task
  const updateTask = async (id, newTask) => {
    try {
      const response = await updateTaskRequest(id, newTask);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //Toggle task done
  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task._id === id);
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? 1 : 0);
      setTasks(
        tasks.map((task) => 
          task._id === id ? { ...task, done: !task.done } : task
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
