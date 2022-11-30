import React from "react";

function Sidebar() {
  return (
    <div className="w-1/5 h-full bg-gray-200 ">
      <div className="flex flex-col justify-center items-center my-10 px-10 ">
        <div className="text-2xl">Welcome,</div>
        <div className="text-2xl font-semibold">Bhumil Modi</div>
        <div className="text-md">bhumilmodi2002@gmail.com</div>
      </div>
      <div className="bg-white w-[80%] mx-auto px-10 h-10 border-black">
        Booked
      </div>
      <div>Book Ticket</div>
      <div>Logout</div>
    </div>
  );
}

export default Sidebar;
