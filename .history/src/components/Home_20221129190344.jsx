import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <div className="flex">
        <Sidebar />
        Home
      </div>
    </div>
  );
}

export default Home;
