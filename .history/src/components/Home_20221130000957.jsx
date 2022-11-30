import React from "react";
import {Route, Routes} from "react-router-dom";
import Booking from "./Booking";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 ">
        <Sidebar />
        <div className="flex-1 h-[85vh] overflow-auto">
          <p className="text-[36px]">Booked Tickets</p>
          <div className=" grid grid-cols-4 gap-x-16 gap-y-5 p-10 ">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
