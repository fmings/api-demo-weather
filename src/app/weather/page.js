'use client';

import { useEffect, useState } from 'react';
import ExternalApiWeather from '@/components/ExternalApiWeatherDemo';
// import WeatherDemo from '../../components/WeatherDemo';
import { getExternalApiWeather } from '../../api/WeatherData';

function WeatherPage() {
  // const [firebaseWeather, setFirebaseWeather] = useState([]);
  const [externalApiWeather, setExternalApiWeather] = useState([]);

  // const getAllWeather = () => {
  //   getFirebaseWeather().then(setFirebaseWeather);
  // };

  const getAllExternalApiWeather = () => {
    getExternalApiWeather().then(setExternalApiWeather);
  };

  useEffect(() => {
    // getAllWeather();
    getAllExternalApiWeather();
  }, []);

  return (
    <div className="text-center d-flex flex-column justify-content-center align-content-center weather-container">
      Weather Display Page
      {/* <div className="firebase-container">
      {firebaseWeather.map((weatherData) => (
        <WeatherDemo firebaseWeatherObj={weatherData} key={weatherData.firebaseKey} />
      ))}
      </div> */}
      <div className="external-api-container">
        {externalApiWeather.map((externalData) => (
          <ExternalApiWeather externalApiObj={externalData} key={externalData.time} />
        ))}
      </div>
    </div>
  );
}

export default WeatherPage;
