import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Register</h1>
      <div className="register">
        {console.log("user", user)}

        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter your email"
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
        <input
          type="password"
          placeholder="Re-enter-password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          onChange={handleChange}
        />

        <button className="button" onClick={() => {
        setUser({ name: "", email: "", password: "", reEnterPassword: "" })
        if (user.name === "" || user.email === "" || user.password === "" || user.reEnterPassword === "") {
            return (
                alert("please fill up all the fields")
            )
        } else {
            navigate("/login")
          }
        }}>Register</button>
        <br></br>
        <Link to="/login" className="button">
          Login
        </Link>
      </div>
    </>
  );
};

export default Register;