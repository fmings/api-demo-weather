'use client';

// import { useEffect, useState } from 'react';
// import WeatherDemo from '../components/WeatherDemo';
// import getWeather from '../api/WeatherData';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.

// import { Button } from 'react-bootstrap';
// import { signOut } from '@/utils/auth'; // anything in the src dir, you can use the @ instead of relative paths
// import { useAuth } from '@/utils/context/authContext';

function Home() {
  // const { user } = useAuth();

  // const [weather, setWeather] = useState(null);

  // const getAllWeather = () => {
  //   getWeather()
  //   .then((weatherData) => {
  //     console.log("Fetched weather data:", weatherData); // Log to verify structure
  //     if (weatherData.locations) {
  //       setWeather(weatherData.locations); // Set the locations data if it exists
  //     } else {
  //       console.warn('Weather data does not contain "locations" field.');
  //     }
  //   })
  // };

  // useEffect(() => {
  //   getAllWeather();
  // }, [weather]);

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
      Home Page
      {/* <WeatherDemo weatherObj={weather} /> */}
    </div>
  );
}

export default Home;
