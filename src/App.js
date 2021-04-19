import React from "react";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Daily weather</h1>
    <Weather />
    <WeatherForecast />
    <Footer />
  </div>
  );
}

export default App;
