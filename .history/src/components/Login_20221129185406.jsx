import React from "react";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="h-[60vh] bg-gray-100 w-1/3 my-[10vh] flex flex-col p-[40px]">
        <div className="text-[36px] mx-auto">Login</div>
        <div className="text-[30px] mt-4 mb-2">E-mail</div>
        <input type="text" className="w-[90%] border-2 border-black" />
        <div className="text-[30px] mt-4 mb-2">Password</div>
        <input type="password" className="w-[90%] border-2 border-black" />
        <div className="flex justify-between items-center mt-10 mr-10">
          {/* <p className="text-[24px] ml-5 text-blue-600 cursor-pointer">
            Sign-Up
          </p> */}
          <Link
            to="signUp"
            className="text-[24px] ml-5 text-blue-600 cursor-pointer"
          >
            Sign Up
          </Link>
          <button className="bg-blue-600 w-1/3 h-[50px] text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
