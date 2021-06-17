import React, { useState } from "react";
import "./style.css";

// Utilities and Context
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../../utils/mutations";

// Components
import Header from "../../components/Header";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [login, { error }] = useMutation(LOGIN_USER);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await login({
        variables: { ...credentials },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Header />

      <div className="container">
        <h2>USER LOGIN</h2>

        {/* Form Begin */}
        <form className="login" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label for="text-input">Username</label>
            <input
              type="text"
              className="form-control"
              id="text-input"
              placeholder="Username"
              name="username"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label for="password-input">Password</label>
            <input
              type="password"
              className="form-control"
              id="password-input"
              placeholder="Password"
              name="password"
              onChange={onChange}
            />
          </div>
          {/* Button */}

          <button className="btn loginButton">
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              className="border"
            >
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                className="bg-line"
              />
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                className="hl-line"
              />
            </svg>
            <span>Login</span>
          </button>
        </form>
        {/* Form End  */}

        <br />
        <p>
          Or create a user <a href="/signup">here</a>
        </p>
      </div>
    </>
  );
}

export default Login;
