import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Zürich",
    date: "Friday 10:00",
    description: "Cloudy",
    imgUrl: "//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 60,
    actualdate: "Friday 27th October",
  };

  return (
    <div className="Weather">
      <div className="weather-app">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <div className="overview">
          <h1>
            <strong> {weatherData.city} </strong>{" "}
          </h1>
          <ul>
            <li>
              Last updated: {weatherData.date}
              <span></span>
            </li>
            <li> {weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img src={weatherData.imgUrl} id="icon" />
              <div>
                <strong></strong>
                <span className="units">
                  {" "}
                  12
                  <a href="/"> °C</a> |<a href="/"> °F </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <i className="fa-solid fa-droplet"></i> Humidity:
                <span> {weatherData.humidity} </span>%
              </li>
              <li>
                <i className="fa-solid fa-wind"></i> Wind:
                <span> {weatherData.wind}</span>km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast">
          <div className="row">
            <div className="col-2">
              <div className="weather-forecast-date"></div>
              {weatherData.actualdate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
