import { Form, Formik, Field } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserRequest } from "../api/users.api";

function RegisterPage() {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  //Field required function
  const fieldRequired = (value) => {
    if (!value) {
      return "Required";
    }
  };

  return (
    <div>
      <h1>Sign in</h1>

      <Formik
        initialValues={newUser}
        onSubmit={async (values, actions) => {
          if (values.password !== values.confirmPassword) {
            alert("Passwords don't match");
          } else {
            try {
              const { firstName, lastName, email, password } = values;
              const user = {
                firstName,
                lastName,
                email,
                password,
              };
              const response = await createUserRequest(user);
              console.log(response);
            } catch (error) {
              console.log(error);
            }
            setNewUser({
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            });
            actions.resetForm(newUser);
          }
        }}
      >
        {({ handleSubmit, handleChange, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>first name</label>
            <Field
              onChange={handleChange}
              type="text"
              name="firstName"
              placeholder="Enter your name"
              value={values.firstName}
              validate={fieldRequired}
            ></Field>
            <label>last name</label>
            <Field
              onChange={handleChange}
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={values.lastName}
              validate={fieldRequired}
            ></Field>
            <label>email</label>
            <Field
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              validate={fieldRequired}
            ></Field>
            <label>password</label>
            <Field
              onChange={handleChange}
              type="text"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              validate={fieldRequired}
            ></Field>
            <label>confirm your password</label>
            <Field
              onChange={handleChange}
              type="text"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={values.confirmPassword}
              validate={fieldRequired}
            ></Field>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>

      <p>Already have an account?</p>
      <button onClick={() => navigate("/login")}>Log in</button>
    </div>
  );
}

export default RegisterPage;
