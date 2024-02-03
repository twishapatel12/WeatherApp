import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c6e4853a4c39d8898d0264f995165cf2`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (location) {
      fetchData();
    }
  }, [location]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Weather weatherData={weatherData} />
    </div>
  );
};

export default WeatherDisplay;