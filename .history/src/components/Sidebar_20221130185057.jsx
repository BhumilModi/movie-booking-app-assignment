import React from "react";
import {useNavigate} from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("user");
  const getUserData = async (token) => {
    const result = await fetch("http://localhost:5000/api/" + token).then(
      (res) => res.json()
    );
    console.log(result.data);
    return result.data;
  };
  const user = JSON.parse(getUserData(token));
  console.log(user);
  const userLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (!user) {
    return <p>Loading</p>;
  }

  return (
    <div className="w-1/5 h-full bg-gray-200 flex flex-col">
      <div className="flex flex-col justify-center items-center my-10 px-10 h-[20vh] ">
        <div className="text-2xl">Welcome,</div>
        <div className="text-2xl font-semibold">
          {user.username.toUpperCase()}
        </div>
        <div className="text-md">{user.email}</div>
      </div>
      <div className="flex flex-col justify-between  flex-1">
        <ul>
          <li
            className="w-[80%] mx-auto px-5 h-10 border-black border-2 rounded-md text-[24px] my-5 cursor-pointer bg-white "
            onClick={() => navigate("/")}
          >
            Booked
          </li>
          <li
            className="bg-white w-[80%] mx-auto px-5 h-10 border-black border-2 rounded-md text-[24px] my-5 cursor-pointer"
            onClick={() => navigate("/booking")}
          >
            Book Ticket
          </li>
        </ul>
        <div
          className="bg-white w-[80%] mx-auto px-5 h-10 border-black border-2 rounded-md text-[24px] mb-10 cursor-pointer"
          onClick={() => userLogout()}
        >
          Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
