import React from "react";

function Sidebar() {
  return (
    <div className="w-1/5 h-full bg-gray-200 p-10">
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl">Bhumil Modi</div>
        <div>email</div>
      </div>
      <div>Booked</div>
      <div>Book Ticket</div>
      <div>Logout</div>
    </div>
  );
}

export default Sidebar;
