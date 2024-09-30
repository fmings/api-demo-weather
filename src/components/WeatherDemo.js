import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherDemo({ weatherObj }) {
  return (
    <div>
      <p>Location: {weatherObj.location}</p>
      <p>Temperature: {weatherObj.temperature}</p>
    </div>
  );
}

// WeatherDemo.propTypes = {
//   weatherObj: PropTypes.shape({
//     locations: PropTypes.string,
//   }),
// };

WeatherDemo.propTypes = {
  weatherObj: PropTypes.shape({
    location: PropTypes.string,
    temperature: PropTypes.string,
  }),
};
