'use client';

import { useEffect, useState } from 'react';
// import getWeather from '../../api/WeatherData';
import WeatherDemo from '../../components/WeatherDemo';
import getFirebaseWeather from '../../api/WeatherData';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.

// import { Button } from 'react-bootstrap';
// import { signOut } from '@/utils/auth'; // anything in the src dir, you can use the @ instead of relative paths
// import { useAuth } from '@/utils/context/authContext';

function WeatherPage() {
  // const { user } = useAuth();

  const [weather, setWeather] = useState([]);

  const getAllWeather = () => {
    getFirebaseWeather().then(setWeather);
  };

  useEffect(() => {
    getAllWeather();
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      Weather Display Page
      {weather.map((weatherData) => (
        <WeatherDemo weatherObj={weatherData} key={weatherData.firebaseKey} />
      ))}
    </div>
  );
}

export default WeatherPage;
