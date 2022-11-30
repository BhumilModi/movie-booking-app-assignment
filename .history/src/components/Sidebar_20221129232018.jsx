import React from "react";
import {useNavigate} from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const userLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="w-1/5 h-full bg-gray-200 flex flex-col">
      <div className="flex flex-col justify-center items-center my-10 px-10 h-[20vh] ">
        <div className="text-2xl">Welcome,</div>
        <div className="text-2xl font-semibold">Bhumil Modi</div>
        <div className="text-md">bhumilmodi2002@gmail.com</div>
      </div>
      <div className="flex flex-col justify-between  flex-1">
        <div>
          <div className="w-[80%] mx-auto px-5 h-10 border-black border-2 rounded-md text-[24px] my-5 cursor-pointer bg-black text-white ">
            Booked
          </div>
          <div className="bg-white w-[80%] mx-auto px-5 h-10 border-black border-2 rounded-md text-[24px] my-5 cursor-pointer">
            Book Ticket
          </div>
        </div>
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