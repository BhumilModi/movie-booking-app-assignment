import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar";

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignUp = async () => {
    // console.log(userName, email, password);
    const result = await fetch("/api/signUp", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: userName,
        email,
        password,
      }),
    }).then((res) => res.json());
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="h-[70vh] bg-gray-100 w-1/3 my-[5vh] flex flex-col p-[40px]">
        <div className="text-[36px] mx-auto mt-[-10px]">SignUp</div>
        <div className="text-[30px] mt-4 mb-2">E-mail</div>
        <input
          type="text"
          className="w-[90%] border-2 border-black p-2"
          placeholder="E-mail"
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="text-[30px] mt-4 mb-2">Name</div>
        <input
          type="text"
          className="w-[90%] border-2 border-black p-2"
          placeholder="Name"
          onChange={(event) => setUserName(event.target.value)}
        />
        <div className="text-[30px] mt-4 mb-2">Password</div>
        <input
          type="text"
          className="w-[90%] border-2 border-black p-2"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="flex justify-end items-center mt-7 mr-10">
          <button
            onClick={() => userSignUp()}
            className="bg-black w-1/3 h-[50px] text-[24px] text-white rounded-lg"
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
