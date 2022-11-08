import axios from "axios";

export const getTasksRequest = async () =>
  await axios.get("http://localhost:3000/api");

export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:3000/api", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:3000/api/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:3000/api/${id}`);

export const updateTaskRequest = async (id, newTask) =>
  await axios.put(`http://localhost:3000/api/${id}`, newTask);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:3000/api/${id}`, {
    done,
  });
