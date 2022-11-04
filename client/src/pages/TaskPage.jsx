import React, { useEffect } from "react";
import { getTasksRequest } from "../api/tasks.api";
import TaskCard from "../components/TaskCard";
import { useTasks } from '../context/TaskContext';

function TaskPage() {

  const { tasks, loadTasks } = useTasks()

  useEffect(() => {
    loadTasks();
  }, []);

  const returnCards = () => {
    if (tasks.length === 0) {
      return <p>No tasks yet</p>;
    }
    return tasks.map((task) => <TaskCard task={task} key={task._id} />);
  };

  return (
    <div>
      <h1>Tasks Page</h1>
      {returnCards()}
    </div>
  );
}

export default TaskPage;
