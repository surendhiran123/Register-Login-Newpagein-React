import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <br></br>
      <div>
      <h2>Please <Link to="/Register" className="button">
       Register
      </Link></h2>
      </div>
      <div></div>
    </div>
  );
};

export default Welcome;