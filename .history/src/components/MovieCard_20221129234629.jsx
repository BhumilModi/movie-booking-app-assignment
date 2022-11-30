import React from "react";

function MovieCard() {
  return (
    <div className="bg-gray-300 h-[30vh] w-[200px] mx-10 my-5 p-3">
      <div className="text-[24px] my-1">Movie Name</div>
      <div>Date</div>
      <div>Number of Seat</div>
      <div>Price</div>
    </div>
  );
}

export default MovieCard;
