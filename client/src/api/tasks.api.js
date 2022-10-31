import axios from "axios";

export const createTask = async (task) =>
  await axios.post("http://localhost:3000/api", task);
