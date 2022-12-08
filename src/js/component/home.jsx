import React, { useState } from "react";
import "../../styles/index.css";

export function Home() {
  const [selectedColor, setSelectedColor] = useState("red");

  return (
    <div className="trafficLight">
      <div
        onClick={() => setSelectedColor("red")}
        className={`light red ${selectedColor == "red" ? "glow" : ""}`}
      ></div>
      <div
        onClick={() => setSelectedColor("yellow")}
        className={`light yellow ${selectedColor == "yellow" ? "glow" : ""}`}
      ></div>

      <div
        className={`light green ${selectedColor == "green" ? "glow" : ""}`}
        onClick={() => setSelectedColor("green")}
      ></div>
    </div>
  );
}

export default Home;
