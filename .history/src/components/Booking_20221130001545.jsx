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
          <div className="w-2/3">
            <p className="text-[42px] font-semibold pb-10">Book Tickets</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
