import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Icons from "./components/icons/Icons";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="w-full h-full absolute bg-white-300 overflow-scroll">
      <Intro />
      <Icons />
    </div>
  );
}

export default App;
