import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="bg-[#FBFCFD]">
      <Navbar />
      <MainSection />
    </div>
  );
}

export default App;
