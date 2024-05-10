import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'a2155e1177ae5c625af5effd1bcdd908'; 

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      if (city.trim() !== '') {
        const response = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        setWeatherData(response.data);
      }
    } catch (error) {
      setError('Error fetching weather data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (


    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {loading ? (
        <p>Loading weather data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
          <div className="new">
          <p><b>Temperature</b>: {weatherData.main.temp}°C</p>
          <p><b>Description</b>: {weatherData.weather[0].description}</p>
          </div>
          {/* <p>Feels like : {weatherData.main.feels_like}°C</p>
          <p>Humidity : {weatherData.main.humidity}%</p>
          <p>Pressure : {weatherData.main.pressure}</p>
          <p>Wind Speed : {weatherData.wind.speed}m/s</p> */}
        </>
      ) : (
        <p><b>Enter a city name to get weather data</b></p>
      )}
    </div>
  );
};

export default Weather;
