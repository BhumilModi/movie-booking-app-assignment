import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Booking() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 ">
        <Sidebar />
        <div className="flex-1 h-[85vh] p-10 flex justify-center items-center">
          <div className="w-2/3 bg-slate-200 h-[70vh] p-10 rounded-xl">
            <p className="text-[42px] font-semibold pb-10">Book Tickets</p>
            <div className="text-[30px] mb-2">E-mail</div>
            <input
              type="text"
              className="w-[90%] border-2 border-black p-2"
              placeholder="E-mail"
            />
            <div className="text-[30px] mt-4 mb-2">Password</div>
            <input
              type="password"
              className="w-[90%] border-2 border-black p-2"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
