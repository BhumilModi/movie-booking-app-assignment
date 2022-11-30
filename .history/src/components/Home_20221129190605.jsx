import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        Home
      </div>
    </div>
  );
}

export default Home;
