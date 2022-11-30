import React from "react";
import Navbar from "./Navbar";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="h-[40vh] bg-gray-100 w-1/3 my-[15vh] flex flex-col p-[40px]">
        <div className="text-[36px] mx-auto">Login</div>
        <div className="text-[30px] mt-4">E-mail</div>
        <input type="text" />
        <div className="text-[30px] mt-4">Password</div>
        <input type="password" />
      </div>
    </div>
  );
}

export default Login;
