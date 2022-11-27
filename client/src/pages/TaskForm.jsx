import React, { useEffect, useState } from "react";
import { Form, Formik, Field } from "formik";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();

  const params = useParams();

  const [task, setTasks] = useState({
    title: "",
    description: "",
    done: 0,
  });

  const navigate = useNavigate();

  //Field required function
  const fieldRequired = (value) => {
    if (!value) {
      return "Required";
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTasks({
          title: task.title,
          description: task.description,
          done: 0,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <h1>{params.id ? "Edit task" : "New task"}</h1>

      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
            navigate("/tasks");
          } else {
            await createTask(values);
          }
          setTasks({
            title: "",
            description: "",
            done: 0,
          });
          actions.resetForm(task);
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <Field
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="Enter your name"
              value={values.title}
              validate={fieldRequired}
            ></Field>
            <label>description</label>
            <Field
              onChange={handleChange}
              name="description"
              placeholder="Write a description"
              value={values.description}
              validate={fieldRequired}
            ></Field>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
