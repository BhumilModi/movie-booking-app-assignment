import React from "react";
import {Route, Routes} from "react-router-dom";
import Booking from "./Booking";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home() {
  const user = JSON.parse(localStorage.getItem("userDetails"));
  // const movies = user.movies;

  console.log(user);
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 ">
        <Sidebar />
        <div className="flex-1 h-[85vh] overflow-auto p-10">
          <p className="text-[42px] font-semibold pb-10">Booked Tickets</p>
          {movies ? (
            <div className=" grid xl:grid-cols-4 gap-x-16 gap-y-5 md:grid-cols-3 ">
              {/* {movies.map((movie, index) => (
                <div id={index}>
                  <MovieCard movie={movie} />
                </div>
              ))} */}
            </div>
          ) : (
            <p className="text-[26px]">No Bookings Yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
