import React from "react";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-1 ">
        <Sidebar />
        <div className="flex-1 h-">
          <div className="overflow-hidden grid grid-cols-4 gap-x-16 gap-y-5 p-10 ">
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
