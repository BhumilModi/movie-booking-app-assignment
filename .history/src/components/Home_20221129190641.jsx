import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex h-[70vh] bg-slate-400">
        <Sidebar />
        Home
      </div>
    </div>
  );
}

export default Home;
