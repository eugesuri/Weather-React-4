import "./App.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Zürich" />
        <footer>
          This project was coded by <em> Eugenia Brunetti Ehnimb</em>
          {""} and is open sourced on {""}
          <a href="https://github.com/eugesuri/Weather-React-4" target="_blank">
            Github{" "}
          </a>
          🌸
        </footer>
      </div>
    </div>
  );
}
