import React, { useState } from "react";
import "./login.css";
import { Link , useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate =useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Login Page</h1>
      <div className="login">
        {console.log("user", user)}
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
          <button className="button" onClick={() => {
        setUser({email: "", password: "" })
        if ( user.email === "" || user.password === "" ) {
            return (
                alert("please fill up all the fields")
            )
        } else {
            navigate("/home")
          }
        }}>Login</button>
        <br></br>
        <Link to="/register" className="button">
          Register
        </Link>
      </div>
    </>
  );
};

export default Login;