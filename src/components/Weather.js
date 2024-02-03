import React from 'react';

const Weather = ({ weatherData }) => {
  if (!weatherData) return <p>No data available</p>;

  const { main, description } = weatherData.weather[0];
  const { temp, humidity } = weatherData.main;
  const { speed } = weatherData.wind;

  return (
    <div>
      <h3>{weatherData.name}</h3>
      <p>Temperature: {temp} K</p>
      <p>Description: {main} - {description}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {speed} m/s</p>
    </div>
  );
};

export default Weather;