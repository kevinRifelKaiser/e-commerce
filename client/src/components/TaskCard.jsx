import React from "react";
import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  const navigate = useNavigate();

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.__v == 0 ? "✅" : "❌"}</span>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
      <button onClick={() => navigate(`/editTask/${task._id}`)}>Edit</button>
    </div>
  );
}

export default TaskCard;
