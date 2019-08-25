import React, { Component } from 'react';
import './App.css';


function WeatherBox(props) {
    const { city, lowTemp, highTemp, currentTemp, humidity, conditions } = props;

    function temp(temper) {
        var newTemp = Math.round((temper - 273.15) * 9 / 5 + 32);
        return newTemp;
    };
 
    return (
      <div className="container">
        <div className="blueWeatherBox">
          <br/>
          <div className="weathertext">{city}</div>
          <br/>
          <div className="weathertext">{conditions}</div>
          <br/>
          <div className="weathertext currentTemp">{temp(currentTemp)}</div>
          <br/>
          <div className="weathertext">High Temperature: {temp(highTemp)}</div>
          <br/>
          <div className="weathertext"> Low Temperature: {temp(lowTemp)}</div>
          <br/>
          <div className="weathertext">Humidity: {humidity}</div>
        </div>
    </div>
        );
}

export default WeatherBox;