import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const userLogin = async () => {
    // console.log(userName, email, password);
    const result = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());

    if (result.status === "ok") {
      // navigate("/login");
      console.log("Token : ", result.data);
    } else {
      setError(result.error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="h-[65vh] bg-gray-100 w-1/3 my-[10vh] flex flex-col p-[40px]">
        <div className="text-[36px] mx-auto">Login</div>
        <div className="text-[30px] mt-4 mb-2">E-mail</div>
        <input
          type="text"
          className="w-[90%] border-2 border-black p-2"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="text-[30px] mt-4 mb-2">Password</div>
        <input
          type="password"
          className="w-[90%] border-2 border-black p-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-between items-center mt-10 mr-10">
          <Link
            to="/signUp"
            className="text-[24px] ml-5 text-blue-600 cursor-pointer"
          >
            Sign Up
          </Link>
          <button
            className="bg-black w-1/3 h-[50px] text-[24px] text-white rounded-lg"
            onClick={() => userLogin()}
          >
            Login
          </button>
        </div>
        <p className=" text-[24px]  text-red-600 mt-5 ml-7">{error}</p>
      </div>
    </div>
  );
}

export default Login;
