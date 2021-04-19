import React, { useState } from "react";
import axios from "axios";

import './Weather.css';

export default function Weather() {
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});
  
    function showWeather(response) {
      setLoaded(true);
      setWeather({
        city: city,
        temperature: Math.round(response.data.main.temp),
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        description: response.data.weather[0].description
      });
    }
  
    function handleSearch(event) {
      event.preventDefault();
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c44c1c027cb5aedabc3d66ae7a76ef48&units=metric`;
      axios.get(url).then(showWeather);
    }
  
    function updateCity(event) {
      setCity(event.target.value);
    }
  
    let form = (
      <form onSubmit={handleSearch}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <button type="submit">Search</button>
      </form>
    );
  
    if (loaded) {
      return (
        <div>
          <ul>
            
            <li>Temperature: {weather.temperature}°C</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind}km/h</li>
            <li>Description: {weather.description}</li>
            <li>
              <img src={weather.icon} alt={weather.description} />
            </li>
            <li>City: <strong>{weather.city}</strong></li>
          </ul>
          {form}
        </div>
      );
    } else {
      return (
          <div>
      <ul>
        <li>Temperature: </li>
        <li>Humidity: </li>
        <li>Wind: </li>
        <li>Description: </li>
        
        <li>City: </li>
      </ul>
      {form}
      </div>
      )
    }
  }