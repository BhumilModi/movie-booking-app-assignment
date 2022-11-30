import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="h-screen flex">
      <Navbar />
      <div className="flex flex-1 bg-slate-400">
        <Sidebar />
        Home
      </div>
    </div>
  );
}

export default Home;