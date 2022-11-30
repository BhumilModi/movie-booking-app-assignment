import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="h-screen bg-slate-600">
      <Navbar />
      <div className="flex">
        <Sidebar />
        Home
      </div>
    </div>
  );
}

export default Home;
