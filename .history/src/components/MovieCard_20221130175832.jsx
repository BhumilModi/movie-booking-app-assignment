import React from "react";

function MovieCard({movie}) {
  return (
    <div className="bg-gray-300 h-[30vh] w-[250px] p-3 rounded-lg">
      <div className="text-[24px] mb-2 h-[10vh]">
        {movie.title.toUpperCase()}
      </div>
      <div className="text-[20px] mb-2">12-12-2022</div>
      <div className="text-[20px] mb-2">Seats Booked : 2</div>
      <div className="text-[20px] ml-20 mt-4">Price : 400</div>
    </div>
  );
}

export default MovieCard;
