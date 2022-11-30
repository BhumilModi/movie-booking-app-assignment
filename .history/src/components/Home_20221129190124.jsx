import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        Home
      </div>
    </div>
  );
}

export default Home;
