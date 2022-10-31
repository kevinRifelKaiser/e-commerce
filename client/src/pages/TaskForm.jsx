import React from "react";
import { Form, Formik } from "formik";
import { createTask } from "../api/tasks.api";

function TaskForm() {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createTask(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="Enter your name"
              value={values.title}
            ></input>
            <label>description</label>
            <textarea
              onChange={handleChange}
              name="description"
              placeholder="Write a description"
              value={values.description}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submiting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
