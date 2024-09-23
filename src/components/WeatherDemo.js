import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherDemo({ weatherObj }) {
  return (
    <div>
      {console.warn('weatherObj', weatherObj)}
      {weatherObj.locations}
    </div>
  );
}

WeatherDemo.propTypes = {
  weatherObj: PropTypes.shape({
    locations: PropTypes.string,
  }),
};
