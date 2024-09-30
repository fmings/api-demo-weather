import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherDemo({ firebaseWeatherObj }) {
  return (
    <div>
      Firebase Data Example:
      <p>Location: {firebaseWeatherObj.location}</p>
      <p>Temperature: {firebaseWeatherObj.temperature}</p>
    </div>
  );
}

// WeatherDemo.propTypes = {
//   weatherObj: PropTypes.shape({
//     locations: PropTypes.string,
//   }),
// };

WeatherDemo.propTypes = {
  firebaseWeatherObj: PropTypes.shape({
    location: PropTypes.string,
    temperature: PropTypes.string,
  }),
};
