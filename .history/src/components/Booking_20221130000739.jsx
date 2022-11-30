import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Booking() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 ">
        <Sidebar />
        Booking Ticket
      </div>
    </div>
  );
}

export default Booking;
