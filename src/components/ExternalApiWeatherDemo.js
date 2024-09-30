import React from 'react';
import PropTypes from 'prop-types';

export default function ExternalApiWeather({ externalApiObj }) {
  return (
    <div>
      External API Data Example:
      {externalApiObj.map((weatherData) => (
        <>
          <p>Date-Time: {weatherData.time}</p>
          <p>Average Temperature: {weatherData.values.temperatureApparentAvg} </p>
          <p>Average Humidity: {weatherData.values.humidityAvg}</p>
        </>
      ))}
    </div>
  );
}

// WeatherDemo.propTypes = {
//   weatherObj: PropTypes.shape({
//     locations: PropTypes.string,
//   }),
// };

ExternalApiWeather.propTypes = {
  externalApiObj: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string,
      humidity: PropTypes.string,
    }),
  ).isRequired,
};
