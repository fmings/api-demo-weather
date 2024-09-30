import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherDemo({ firebaseWeatherObj }) {
  return (
    <div>
      Firebase Data Example:
      <div className="weather-detail-container">
        <p>Location: {firebaseWeatherObj.location}</p>
        <p>Temperature: {firebaseWeatherObj.temperature}</p>
      </div>
    </div>
  );
}

WeatherDemo.propTypes = {
  firebaseWeatherObj: PropTypes.shape({
    location: PropTypes.string,
    temperature: PropTypes.string,
  }),
};
