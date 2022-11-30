import React from "react";

function Sidebar() {
  return (
    <div className="w-1/5 h-full bg-gray-200 p-10">
      <div className="flex flex-col justify-center items-center my-5">
        <div className="text-2xl">Welcome,</div>
        <div className="text-2xl font-semibold">Bhumil Modi</div>
        <div className="text-md">bhumilmodi2002@gmail.com</div>
      </div>
      <div>Booked</div>
      <div>Book Ticket</div>
      <div>Logout</div>
    </div>
  );
}

export default Sidebar;
