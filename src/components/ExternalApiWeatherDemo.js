import React from 'react';
import PropTypes from 'prop-types';

export default function ExternalApiWeather({ externalApiObj }) {
  return (
    <div>
      External API Data Example:
      {externalApiObj.map((weatherData) => (
        <div className="weather-detail-container">
          <p>Date-Time: {weatherData.time}</p>
          <p>Average Temperature: {weatherData.values.temperatureApparentAvg} </p>
          <p>Average Humidity: {weatherData.values.humidityAvg}</p>
        </div>
      ))}
    </div>
  );
}

ExternalApiWeather.propTypes = {
  externalApiObj: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string,
      humidity: PropTypes.string,
    }),
  ).isRequired,
};
