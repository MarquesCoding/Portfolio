import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Icons from "./components/icons/Icons";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="w-full h-full absolute bg-white-300 overflow-hidden">
      <Intro />
      <Icons />
    </div>
  );
}

export default App;
