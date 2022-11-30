import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Booking from "./Booking";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home() {
  const [movies, setMovies] = useState([]);

  const getUserData = async (token) => {
    const result = await fetch("http://localhost:5000/api/" + token)
      .then((res) => res.json())
      .then((res) => {
        const data = JSON.stringify(res.data);
        console.log(data);
      });
    return result.data;
  };

  useEffect(() => {
    const token = localStorage.getItem("user");
    const user = getUserData(token);
    console.log(user);
    // if (user !== undefined) {
    //   setMovies(user.movies);
    // }
  }, []);

  console.log(movies);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 ">
        <Sidebar />
        <div className="flex-1 h-[85vh] overflow-auto p-10">
          <p className="text-[42px] font-semibold pb-10">Booked Tickets</p>
          {movies.lenght !== 0 ? (
            <div className=" grid xl:grid-cols-4 gap-x-16 gap-y-5 md:grid-cols-3 ">
              {movies.map((movie, index) => (
                <div key={index}>
                  <MovieCard movie={movie} />
                </div>
              ))}
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
