import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#FBFCFD] cursor-default">
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
