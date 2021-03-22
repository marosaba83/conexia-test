import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

function LoginForm(props) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target
    setUser(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();

    const payload = {
      username: user.username,
      password: user.password
    }

    axios.post('login', payload)
      .then((res) => {

        if (res.status === 200) {
          sessionStorage.setItem('jwt', res.data.token);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('jwt');
          redirectToHome();
        }

        if (res.status === 201) {
          const errorMessage = res.data;
          setErrorMessage(errorMessage);
          setUser({
            username: "",
            password: ""
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const redirectToHome = () => {
    props.history.push('/home');
  }

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label>Username</label>
          <input type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group text-left">
          <label>Password</label>
          <input type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group text-left text-danger">
          {errorMessage}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >Login
        </button>
      </form>

    </div>
  )
}

export default withRouter(LoginForm);