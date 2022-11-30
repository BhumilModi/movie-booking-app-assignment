import React from "react";
import Navbar from "./Navbar";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="h-[60vh] bg-gray-100 w-1/3 my-[20vh]">
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
