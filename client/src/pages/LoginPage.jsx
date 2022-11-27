import { useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  return (
    <div>
      <h1>Log in</h1>

      <Formik
        initialValues={user}
        // onSubmit={}
      >
        {({ handleChange, values, isSubmitting }) => (
          <Form>
            <label>email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
            ></input>
            <label>password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
            ></input>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submiting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>

      <p>Don't have an account?</p>
      <button onClick={() => navigate('/register')}>Sign in</button>
    </div>
  );
}

export default LoginPage;
