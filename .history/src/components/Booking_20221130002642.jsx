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
            <p className="text-[42px] font-semibold pb-5">Book Tickets</p>
            <div className="text-[25px] mb-2">Movie Name</div>
            <input
              type="text"
              className="w-[90%] border-2 border-black p-2"
              placeholder="Movie"
            />
            <div className="text-[25px] mt-4 mb-2">Number of Seats</div>
            <input
              type="number"
              className="w-[50%] border-2 border-black p-2"
              placeholder="Seats"
            />
            <div className="text-[25px] mt-4 mb-2">Date</div>
            <input type="date" className="w-[50%] border-2 border-black p-2" />
            <div className="flex justify-end items-center">
              <button className="bg-black w-[10vw] h-[5vh] mr-10 mt-7 text-white text-[20px]">
                Book Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
