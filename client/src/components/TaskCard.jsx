import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {

  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task._id);
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✅" : "❌"}</span>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
      <button onClick={() => navigate(`/editTask/${task._id}`)}>Edit</button>
      <button onClick={() => handleDone()}>Toggle task</button>
    </div>
  );
}

export default TaskCard;
