'use client';

import { useEffect, useState } from 'react';
// import getWeather from '../../api/WeatherData';
import ExternalApiWeather from '@/components/ExternalApiWeatherDemo';
import WeatherDemo from '../../components/WeatherDemo';
import { getFirebaseWeather, getExternalApiWeather } from '../../api/WeatherData';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.

// import { Button } from 'react-bootstrap';
// import { signOut } from '@/utils/auth'; // anything in the src dir, you can use the @ instead of relative paths
// import { useAuth } from '@/utils/context/authContext';

function WeatherPage() {
  // const { user } = useAuth();

  const [firebaseWeather, setFirebaseWeather] = useState([]);
  const [externalApiWeather, setExternalApiWeather] = useState([]);

  const getAllWeather = () => {
    getFirebaseWeather().then(setFirebaseWeather);
  };

  const getAllExternalApiWeather = () => {
    getExternalApiWeather().then(setExternalApiWeather);
  };

  useEffect(() => {
    getAllWeather();
    getAllExternalApiWeather();
  }, []);

  return (
    <div className="text-center d-flex flex-column justify-content-center align-content-center">
      Weather Display Page
      {firebaseWeather.map((weatherData) => (
        <WeatherDemo firebaseWeatherObj={weatherData} key={weatherData.firebaseKey} />
      ))}
      {externalApiWeather.map((externalData) => (
        <ExternalApiWeather externalApiObj={externalData} key={externalData.time} />
      ))}
    </div>
  );
}

export default WeatherPage;
