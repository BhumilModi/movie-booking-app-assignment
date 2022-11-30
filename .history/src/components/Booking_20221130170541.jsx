import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Booking() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [tickets, setTickets] = useState(0);
  const [date, setDate] = useState();

  const user = JSON.parse(localStorage.getItem("userDetails"));

  const bookTicket = async () => {
    const result = await fetch("http://localhost:5000/api/bookMovie", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: user.email,
        title,
        tickets,
        date,
      }),
    }).then((res) => res.json());
    console.log(result);
    console.log(title);
  };

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
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="text-[25px] mt-4 mb-2">Number of Seats</div>
            <input
              type="number"
              className="w-[50%] border-2 border-black p-2"
              placeholder="Seats"
              onChange={(e) => setTickets(e.target.value)}
            />
            <div className="text-[25px] mt-4 mb-2">Date</div>
            <input
              type="date"
              className="w-[50%] border-2 border-black p-2"
              onChange={(e) => setDate(e.target.value)}
            />
            <div className="flex justify-end items-center">
              <button
                className="bg-black p-2 px-5 mr-10 mt-7 text-white text-[24px] rounded-lg"
                onClick={() => bookTicket()}
              >
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
