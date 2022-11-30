import React from "react";
import Navbar from "./Navbar";

function Login() {
  return (
    <div>
      <Navbar />
      <div>
        <div>Login</div>
        <div>E-mail</div>
        <input type="text" />
        <div>Password</div>
        <input type="password" />
      </div>
    </div>
  );
}

export default Login;
